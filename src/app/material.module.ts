import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatBottomSheetModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatBottomSheetModule,
    MatChipsModule
  ],
})
export class MaterialModule { }
