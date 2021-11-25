import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [ 
    SearchComponent
  ]
})
export class SearchModule { }
