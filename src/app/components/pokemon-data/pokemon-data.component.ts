import { Component, OnInit } from '@angular/core';
import { PokenmonService } from 'src/app/service/pokenmon.service';
import { skipWhile, tap } from 'rxjs/operators';
@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.scss'],
})
export class PokemonDataComponent implements OnInit {
  pokemonData: any;
  scroll: any;

  constructor(private pokemon: PokenmonService) { }

  ngOnInit(): void {
    this.getPokemonlist();
  }

  getPokemonlist(offset = 0,) {
    const endpoint = `pokemon/?limit=40${offset ? '&offset=' + offset : ''}`;
    this.pokemon.get(endpoint).subscribe((res: any) => {
      this.pokemonData = res;
    })
  }
  onScrollPage(): void {
      this.getPokemonlist();
  }
}
