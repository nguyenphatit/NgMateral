import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhSachDeThiComponent } from './danh-sach-de-thi/danh-sach-de-thi.component';
import { TaoDeThiComponent } from './tao-de-thi/tao-de-thi.component';
import { InDeThiComponent } from './in-de-thi/in-de-thi.component';


const routes: Routes = [
  {
    path: '',
    component: DanhSachDeThiComponent
  }, {
    path: 'tao-de-thi',
    component: TaoDeThiComponent
  }, {
    path: 'in-de-thi',
    component: InDeThiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeThiRoutingModule { }
