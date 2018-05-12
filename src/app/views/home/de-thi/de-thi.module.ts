import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeThiRoutingModule } from './de-thi-routing.module';
import { DanhSachDeThiComponent } from './danh-sach-de-thi/danh-sach-de-thi.component';
import { TaoDeThiComponent } from './tao-de-thi/tao-de-thi.component';
import { InDeThiComponent } from './in-de-thi/in-de-thi.component';


@NgModule({
  imports: [
    CommonModule,
    DeThiRoutingModule
  ],
  exports: [],
  declarations: [
    DanhSachDeThiComponent,
    TaoDeThiComponent,
    InDeThiComponent
  ],
  providers: [],
})
export class DeThiModule { }
