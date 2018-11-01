import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class MaterialDesignModule { }
