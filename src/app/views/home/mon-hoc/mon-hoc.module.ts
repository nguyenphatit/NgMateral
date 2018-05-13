import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachMonHocComponent } from './danh-sach-mon-hoc/danh-sach-mon-hoc.component';
import { MonHocRoutingModule } from './mon-hoc-routing.module';
import { MaterialModule } from '../../../material.module';


@NgModule({
  imports: [
    CommonModule,
    MonHocRoutingModule,
    MaterialModule
  ],
  exports: [],
  declarations: [
    DanhSachMonHocComponent
  ],
  providers: [],
})
export class MonHocModule { }
