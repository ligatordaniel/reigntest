import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/shared/models/news.model';
import { LocalStorageService } from 'src/app/core/services/storageService/local-storage.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public allFavoriteNews: Array<NewsModel> = [];
  public loading: boolean = true
  public showMessageNoFavorites: boolean = true

  constructor(
    private storage: LocalStorageService,
  ) { }

  async ngOnInit() {
    this.getFavoritesNews()
  }

  async getFavoritesNews(){
    let favorites = await this.storage.get('favorites')
    favorites = JSON.parse(favorites)
    if(favorites.length === 0 || !favorites){
      this.loading = false  
      this.showMessageNoFavorites = true
      return
    }
    if (favorites.length > 0 || favorites) {
      this.allFavoriteNews = favorites
      this.loading = false
      this.showMessageNoFavorites = false
      return
    }
  }


  async deleteFavorite(news: NewsModel) {
    let myNews = this.allFavoriteNews
    let index = myNews.findIndex(element => element.objectID === news.objectID)
    myNews.splice(index, 1)
    await this.storage.set('favorites', JSON.stringify(myNews))
    this.getFavoritesNews()
  }



  goToUrl(url: string) {
    window.open(url, '_blank')
  }


}
