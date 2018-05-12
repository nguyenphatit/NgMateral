import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuongMucRoutingModule } from './chuong-muc-routing.module';
import { XemDeCuongComponent } from './xem-de-cuong/xem-de-cuong.component';


@NgModule({
  imports: [
    CommonModule,
    ChuongMucRoutingModule
  ],
  exports: [],
  declarations: [
    XemDeCuongComponent
  ],
  providers: [],
})
export class ChuongMucModule { }
