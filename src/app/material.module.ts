import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatBottomSheetModule,
    MatChipsModule,
    MatSelectModule,
    MatGridListModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatBottomSheetModule,
    MatChipsModule,
    MatSelectModule,
    MatGridListModule,
    MatProgressBarModule
  ],
})
export class MaterialModule { }
