import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemon: any;

  public getAllPokemons: any;
  private setAllPokemons: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.listPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      }
    )
  }

  public getSearch(value: string) {
      const filter = this.setAllPokemons.filter((res: any) => {
        return  !res.name.indexOf(value.toLowerCase());
      })

      this.getAllPokemons = filter;
  }

}
