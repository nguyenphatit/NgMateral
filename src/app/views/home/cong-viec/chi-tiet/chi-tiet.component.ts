import { Teacher } from './../../../../_models/teacher';
import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../../../_services/teacherService.service';

@Component({
  templateUrl: 'chi-tiet.component.html'
})

export class ChiTietComponent implements OnInit {
  jobs;
  numberOfRecord: number;
  numberOfPage;
  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.teacherService.getJobsOfTeacherPaging(1, 2).subscribe((data: any) => {
      this.jobs = data.listOfResult;
      this.numberOfPage = data.numberOfPage;
      this.numberOfRecord = data.numberOfRecord;
      // console.log(data);
      this.numberOfPage  = 10;
    });
  }

}
