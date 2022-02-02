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


  async getAllNews(page: number, frameWork: string): Promise<any> {
    return await this.http.get(`${this.BASE_URL}/search_by_date?query=${frameWork}&page=${page}`)
      .toPromise();
  }

}
