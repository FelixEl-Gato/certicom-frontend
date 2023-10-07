import {NgModule} from '@angular/core';

import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatSortModule} from "@angular/material/sort";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  exports: [
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatExpansionModule,
    MatDialogModule
  ]
})
export class MaterialModule {
}
