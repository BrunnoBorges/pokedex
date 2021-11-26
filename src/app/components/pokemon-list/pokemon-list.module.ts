import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SearchModule } from '../search/search.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SearchModule,
    RouterModule
  ],
  exports: [PokemonListComponent]
})
export class PokemonListModule { }
