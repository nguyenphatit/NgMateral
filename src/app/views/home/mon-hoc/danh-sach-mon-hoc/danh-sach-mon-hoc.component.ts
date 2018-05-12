import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService } from './../../../../_services/teacherService.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../../_models/subject';
@Component({
  templateUrl: 'danh-sach-mon-hoc.component.html'
})


export class DanhSachMonHocComponent implements OnInit {
  currentPage = 1;
  size = 10;
  numberOfRecord = 0;
  numberOfPage = 0;
  subjects: Array<Subject>;
  constructor(private teacherService: TeacherService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.teacherService.getListSubjectOfTeacherEmailFromToken(this.currentPage, this.size).subscribe((data: any) => {
      this.subjects = data.listOfResult;
      this.numberOfPage = data.numberOfPage;
      this.numberOfRecord = data.numberOfRecord;
      // console.log(data);
    });
  }
}
