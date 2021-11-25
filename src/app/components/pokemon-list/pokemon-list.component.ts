import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemon: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    // this.pokemonService.getList().subscribe((data) => {
    //   console.log('--->', data);
    //   this.pokemon = data;
    // }, (error) => {
    //   console.log('error', error)
    // });
    // this.pokemonService.getList();
    this.pokemonService.listPokemons.subscribe(
      res => console.log('--->', res)
    )
  }

}
