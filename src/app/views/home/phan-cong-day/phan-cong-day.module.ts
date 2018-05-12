import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhanCongDayRoutingModule } from './phan-cong-day-routing.module';
import { MonHocPhanCongComponent } from './mon-hoc-phan-cong/mon-hoc-phan-cong.component';
import { ChiTietMonHocComponent } from './chi-tiet-mon-hoc/chi-tiet-mon-hoc.component';
import { BoMonPhanCongComponent } from './bo-mon-phan-cong/bo-mon-phan-cong.component';
import { DanhSachMonHocComponent } from '../mon-hoc/danh-sach-mon-hoc/danh-sach-mon-hoc.component';


@NgModule({
  imports: [
    CommonModule,
    PhanCongDayRoutingModule
  ],
  exports: [],
  declarations: [
    MonHocPhanCongComponent,
    BoMonPhanCongComponent,
    DanhSachMonHocComponent,
    ChiTietMonHocComponent
  ],
  providers: [],
})
export class PhanCongDayModule { }
