import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatBottomSheetModule,
    MatChipsModule,
    MatSelectModule,
    MatGridListModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSidenavModule,
    MatSortModule,
    MatBadgeModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatBottomSheetModule,
    MatChipsModule,
    MatSelectModule,
    MatGridListModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSidenavModule,
    MatSortModule,
    MatBadgeModule
  ],
})
export class MaterialModule { }
