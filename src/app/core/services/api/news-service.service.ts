import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  private url: string = 'https://pokeapi.co/api/v2';
  constructor(
    private http: HttpClient
  ) {}

  async getPokemons(limit: number): Promise<any> {
    return await this.http.get(`${this.url}/pokemon-species?limit=${limit}`)
      .toPromise();
  }

  async getPokemonsDetail(id: number): Promise<any> {
    return await this.http.get(`${this.url}/pokemon/${id}`)
      .toPromise();
  }

  async getPokemonsSpecies(id: number): Promise<any> {
    return await this.http.get(`${this.url}/pokemon-species/${id}`)
      .toPromise();
  }

  async getEvolutionChain(url: string): Promise<any> {
    return await this.http.get(url)
      .toPromise();
  }
}
