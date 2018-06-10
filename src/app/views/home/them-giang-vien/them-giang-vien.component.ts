import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../../_services/department.serive';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { TeacherService } from '../../../_services/teacherService.service';
import { NotifyCenterService } from '../../../_services/notify-center.service';
import { Teacher } from '../../../_models';

@Component({
  templateUrl: 'them-giang-vien.component.html'
})

export class ThemGiangVienComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  url_avatar: string;
  submitted = false;
  userform: FormGroup;
  teacherModel: Teacher = new Teacher();
  departmentModel: any;

  constructor(
    private _formBuilder: FormBuilder,
    private teacherService: TeacherService,
    private notifyCenterService: NotifyCenterService,
    private departmentService: DepartmentService
  ) { }

  ngOnInit() {
    this.loadDepartment();
    this.steps();
  }

  steps() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onUploadAvartar(event) {
    if (event.res) {
      const response = event.res.body;
      const data = JSON.parse(response);
      const auth = JSON.parse(data[0].fileProperties);
      console.log(auth.webContentLink);
      this.url_avatar = auth.webContentLink;
      console.log(this.url_avatar);
      this.submitted = false;
    }
    if (event.submitted) {
      console.log(event);
      this.submitted = !event.submitted.value;
    }
  }

  loadDepartment() {
    this.departmentService.getAllDepartment().subscribe((data: any) => {
      this.departmentModel = data;
      // console.log(this.departmentModel);
    });
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.teacherModel.firstName = f.value.firstName;
    this.teacherModel.lastName = f.value.lastName;
    this.teacherModel.birthDay = f.value.birthDay;
    this.teacherModel.email = f.value.email;
    this.teacherModel.password = f.value.password;
    this.teacherModel.avatar = (this.url_avatar) ? this.url_avatar : f.value.avatar;
    this.teacherModel.address = f.value.address;
    this.teacherModel.phoneNumber = f.value.phoneNumber;
    this.teacherModel.sex = f.value.sex;
    this.teacherModel.departmentId = f.value.department;
    console.log(this.teacherModel);
    this.teacherService.createTeacher(this.teacherModel).subscribe((data: any) => {
      this.notifyCenterService.sendNotifyCenter({ massage: 'Sucess!', status: 200, details: null });
    });
  }

}
