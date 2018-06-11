import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../../_services/department.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: 'them-giang-vien.component.html'
})

export class ThemGiangVienComponent implements OnInit {
  // departmentModel: any;
  url_avatar: string;
  submitted = false;
  userform: FormGroup;

  constructor(
  ) { }

  ngOnInit() {
  }

  onUploadAvartar(event) {
    console.log(event);
    if (event.res) {
      const response = event.res.body;
      // const data = JSON.parse(response);
      // const auth = JSON.parse(data[0].fileProperties);
      // console.log(auth.webContentLink);
      // this.url_avatar = auth.webContentLink;
      // console.log(this.url_avatar);
      this.submitted = false;
    }
    if (event.submitted) {
      console.log(event);
      this.submitted = !event.submitted.value;
    }
  }

  // onSubmit(f)

}
