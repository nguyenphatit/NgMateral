import { QuestionService } from './../../../_services/questionService.service';
import { JobService } from './../../../_services/job.service';
import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../../_services/teacherService.service';
import { max } from 'rxjs/operators';
import { stat } from 'fs';
import { map } from 'rxjs/operators';
@Component({
  templateUrl: 'soan-cau-hoi.component.html'
})

export class SoanCauHoiComponent implements OnInit {
  isTL = true;
  isTN = true;
  numAnswer: Number;
  subjects;
  selectedSubject;
  questions;
  subjectId = 0;
  //
  numberOfRecord: number;
  numberOfPage: number;
  current_page = 1;
  collectionPageShow;
  limit = 3;
  page_show = true;
  number_showPape = 3; // số button tối đa hiển thị, chọn số lẻ
  movePage(page: number): void {
    this.page_show = false;
    this.current_page = page;
    this.loadData();
    this.page_show = true;
  }
  limitPerPage(limit: number): void {
    this.page_show = false;
    this.limit = limit;
    this.current_page = 1;
    this.loadData();
    this.page_show = true;
  }

  fillRange(start: number, end: number): Array<number> {
    return Array(end - start + 1).fill(0).map((item, index) => start + index);
  }
  collectionPage(current_page: number, max_numberOfPage): Array<number> {
    let arrays: any;
    const start = Math.ceil(this.number_showPape / 2);
    const end = max_numberOfPage - (start - 1);
    if (current_page < start) {
      arrays = this.fillRange(1, this.number_showPape);
    } else if (current_page > end) {
      arrays = this.fillRange(max_numberOfPage - this.number_showPape + 1, max_numberOfPage);
    } else {
      arrays = this.fillRange(current_page - (start - 1), current_page + (start - 1));
    } console.log(arrays);
    return arrays;
  }
  /* numberShowPage(index: number, current_page: number, max_numberOfPage): boolean {
    index = +index;
    current_page = +current_page;
    max_numberOfPage = +max_numberOfPage;
    const start = Math.ceil(this.number_showPape / 2);
    const end = max_numberOfPage - (start - 1);
    return (current_page >= start && end >= current_page && Math.abs(current_page - index) < start)
      || (current_page < start && (index <= this.number_showPape))
      || (current_page > end && (index > max_numberOfPage - this.number_showPape));

  } */


  constructor(private teacherService: TeacherService
    , private questionService: QuestionService) { }

  ngOnInit() {
    this.teacherService.getSubjectOfTeacher().subscribe((data: any) => {
      this.subjects = data;
    });

  }

  openTL(): void {
    this.isTL = false;
    this.isTN = true;
  }

  openTN(): void {
    this.isTL = true;
    this.isTN = false;
  }
  numberQuestion(number: number) {
    this.numAnswer = number;
    console.log(number);
  }
  changeSubject(subjectId: number) {
    this.subjectId = +subjectId;
    this.loadData();
  }

  loadData() {
    this.questionService.getQuestionOfTeacherCompile(this.subjectId, this.current_page, this.limit)
      .subscribe((data: any) => {
        this.questions = data.listOfResult;
        this.numberOfPage = data.numberOfPage;
        this.numberOfRecord = data.numberOfRecord;
        this.collectionPageShow = this.collectionPage(this.current_page, this.numberOfPage);
        console.log(data);
      });
  }
}
