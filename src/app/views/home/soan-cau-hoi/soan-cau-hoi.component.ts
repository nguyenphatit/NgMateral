import { JobService } from './../../../_services/job.service';
import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../../_services/teacherService.service';
@Component({
  templateUrl: 'soan-cau-hoi.component.html'
})

export class SoanCauHoiComponent implements OnInit {
  isTL = true;
  isTN = true;
  numAnswer: Number;

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacherService.getSubjectOfTeacher().subscribe((data: any) => {
      console.log(data);
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
}
