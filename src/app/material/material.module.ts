import { NgModule } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [],
  imports: [
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatPaginatorModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
