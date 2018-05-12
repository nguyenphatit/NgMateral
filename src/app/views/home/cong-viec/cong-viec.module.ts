import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongViecRoutingModule } from './cong-viec-routing.module';
import { ChiTietComponent } from './chi-tiet/chi-tiet.component';
import { TaoCauHoiComponent } from './tao-cau-hoi/tao-cau-hoi.component';
import { TaoDeCuongComponent } from './tao-de-cuong/tao-de-cuong.component';
import { TaoCauTrucComponent } from './tao-cau-truc/tao-cau-truc.component';


@NgModule({
  imports: [
    CommonModule,
    CongViecRoutingModule
  ],
  exports: [],
  declarations: [
    ChiTietComponent,
    TaoCauHoiComponent,
    TaoDeCuongComponent,
    TaoCauTrucComponent
  ],
  providers: [],
})
export class CongViecModule { }
