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
<<<<<<< HEAD
=======
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
>>>>>>> a32b5a2dc47896f8bb53e4f54fda2f3dfc91a879

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
<<<<<<< HEAD
    MatPaginatorModule
=======
    MatPaginatorModule,
    MatMenuModule,
    MatSidenavModule,
    MatSortModule
>>>>>>> a32b5a2dc47896f8bb53e4f54fda2f3dfc91a879
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
<<<<<<< HEAD
    MatPaginatorModule
=======
    MatPaginatorModule,
    MatMenuModule,
    MatSidenavModule,
    MatSortModule
>>>>>>> a32b5a2dc47896f8bb53e4f54fda2f3dfc91a879
  ],
})
export class MaterialModule { }
