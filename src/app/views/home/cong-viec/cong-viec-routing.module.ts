import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChiTietComponent } from './chi-tiet/chi-tiet.component';
import { TaoCauHoiComponent } from './tao-cau-hoi/tao-cau-hoi.component';
import { TaoDeCuongComponent } from './tao-de-cuong/tao-de-cuong.component';
import { TaoCauTrucComponent } from './tao-cau-truc/tao-cau-truc.component';

const routes: Routes = [
  {
    path: '',
    component: ChiTietComponent
  }, {
    path: 'tao-cau-hoi',
    component: TaoCauHoiComponent
  }, {
    path: 'tao-de-cuong',
    component: TaoDeCuongComponent
  }, {
    path: 'tao-cau-truc',
    component: TaoCauTrucComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongViecRoutingModule { }
