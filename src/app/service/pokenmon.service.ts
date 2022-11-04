import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import {  switchMap, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PokenmonService {
  api_url: any;
  count: any;
  pokemons$ = new BehaviorSubject<PokemonDetail[]>([]);

  constructor(
    public httpClient: HttpClient,
  ) { }

  get(endpoint: any) {
    return this.httpClient.get<any>(`${environment.apiUrl}/${endpoint}`, {
    })
      .pipe(
        tap((x) => {
          this.api_url = x.next;
          this.count = x.count;
        }),
        switchMap((x) => this.fetchPokemonData(x.results))
      );
  }

  private fetchPokemonData(
    pokemons: any[]
  ): Observable<PokemonDetail[]> {
    return combineLatest(
      pokemons.map((x) => this.httpClient.get<PokemonDetail>(x.url).pipe(
      )))
  };
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: any;
  stats: any;
  types: any;
}

