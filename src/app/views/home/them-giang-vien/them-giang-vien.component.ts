import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../../_services/department.serive';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: 'them-giang-vien.component.html'
})

export class ThemGiangVienComponent implements OnInit {
  departmentModel: any;

  constructor(
    private fb: FormBuilder,
    private departmentServive: DepartmentService
  ) { }

  ngOnInit() {
    this.getAllDepartment();
  }

  getAllDepartment() {
    this.departmentServive.getAllDepartment().subscribe((data: any) => {
      this.departmentModel = data;
      console.log(this.departmentModel);
    });
  }

}
