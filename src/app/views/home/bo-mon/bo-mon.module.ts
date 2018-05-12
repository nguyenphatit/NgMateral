import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoMonRoutingModule } from './bo-mon-routing.module';
import { DanhSachBoMonComponent } from './danh-sach-bo-mon/danh-sach-bo-mon.component';


@NgModule({
  imports: [
    CommonModule,
    BoMonRoutingModule
  ],
  exports: [],
  declarations: [
    DanhSachBoMonComponent
  ],
  providers: [],
})
export class BoMonModule { }
