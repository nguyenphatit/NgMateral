import { Teacher } from './../../../../_models/teacher';
import { Subject } from './../../../../_models/subject';
import { SubjectService } from './../../../../_services/subjectService.service';
import { TeacherService } from './../../../../_services/teacherService.service';
import { Component, OnInit } from '@angular/core';
import { subscribeOn, tap } from 'rxjs/operators';
import { Form, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: 'phan-cong-de-cuong.component.html'
})

export class PhanCongDeCuongComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  dsBoMon;
  dsMonHoc;
  dsGiangVien;
  selectBoMon: any;
  selectMonHoc;
  selectGiangVien;
  selectFinish = false;
  name = '';
  constructor(private _formBuilder: FormBuilder, private teacherService: TeacherService, private subjectService: SubjectService) { }

  ngOnInit() {
    this.formStep();
    this.teacherService.getListDepartmentOfTeacherEmailFromToken().subscribe((data: any) => {
      this.dsBoMon = data;
      console.log(data);
    });
  }

  formStep(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  changeBoMon(departmentId: any) {
    departmentId = +departmentId;
    this.selectBoMon = this.dsBoMon.filter(x =>
      x.departmentId === departmentId
    )[0] || '';
    this.dsMonHoc = this.selectBoMon.subjects || '';
  }
  changeSubject(subjectId: any) {
    subjectId = +subjectId;
    this.subjectService.getSubjectBySubjectId(subjectId).subscribe((data: any) => {
      this.selectMonHoc = data;
      this.dsGiangVien = this.selectMonHoc.teachers;
    });
  }
  changeTeacher(teacherId: any) {
    teacherId = +teacherId;
    this.selectGiangVien = this.dsGiangVien.filter(x => x.teacherId === teacherId)[0] || '';
  }
  changeStartTime(startTime: any) {
    const date = new Date(startTime);
    console.log(date.valueOf() || '');
  }
  changeFinishTime(finishTime: any) {
    const date = new Date(finishTime);
    console.log(date.valueOf() || '');

  }
}
