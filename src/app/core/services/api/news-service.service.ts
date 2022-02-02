import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  private BASE_URL: string = 'https://hn.algolia.com/api/v1/';
  constructor(
    private http: HttpClient
  ) {}
  //angular https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0
  //React: https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0
  //Vuejs: https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=0
  

  async getAllNews(page: number, frameWork: string): Promise<any> {
    return await this.http.get(`${this.BASE_URL}/search_by_date?query=${frameWork}&page=${page}`)
      .toPromise();
  }


  /*
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
  */
}
