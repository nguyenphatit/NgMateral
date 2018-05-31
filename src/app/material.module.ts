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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';

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
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatStepperModule,
    MatTooltipModule
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
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatStepperModule,
    MatTooltipModule
  ],
})
export class MaterialModule { }
