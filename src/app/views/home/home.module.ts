import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSelectModule} from '@angular/material/select';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PokemonService } from 'src/app/service/pokemon/pokemon.service';
import { PokemonListModule } from 'src/app/components/pokemon-list/pokemon-list.module';
import { DetailsModule } from '../details/details.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSelectModule,
    PokemonListModule,
    DetailsModule
  ],
  providers: [PokemonService]
})
export class HomeModule { }
