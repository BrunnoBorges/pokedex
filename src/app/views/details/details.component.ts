import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonService } from '../../service/pokemon/pokemon.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  
  // private urlPokemon: string = `${environment.pokemonList}/pokemon`;
  // private urlName: string = `${environment.pokemonList}/pokemon-species`;
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;

  constructor(private activatedRoute: ActivatedRoute, 
    private pokeservice: PokemonService) { 

    }

  ngOnInit(): void {
    this.pokemon;
  }

  getpokemon() {
    const id = this.activatedRoute.snapshot.params['id']; 
    const pokemon = this.pokeservice.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeservice.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe( res => {
      console.log('--->', res)
      this.pokemon = res;
    })

     
  }

}
