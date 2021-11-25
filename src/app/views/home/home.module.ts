import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSelectModule} from '@angular/material/select';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PokemonService } from 'src/app/service/pokemon/pokemon.service';
import { PokemonListModule } from 'src/app/components/pokemon-list/pokemon-list.module';
import { SearchModule } from 'src/app/components/search/search.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSelectModule,
    PokemonListModule,
    SearchModule,
  ],
  providers: [PokemonService]
})
export class HomeModule { }
