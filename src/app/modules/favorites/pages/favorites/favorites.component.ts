import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { NewsServiceService } from 'src/app/core/services/api/news-service.service';
import { LocalStorageService } from 'src/app/core/services/storageService/local-storage.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  public allFavoriteNews: any[] = [];
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
      this.showMessageNoFavorites = true
      this.loading = false  
      return
    }
    if (favorites.length > 0 || favorites) {
      this.showMessageNoFavorites = false
      this.allFavoriteNews = favorites
      this.loading = false
      return
    }
  }


  async deleteFavorite(news: any) {
    let myNews = this.allFavoriteNews
    let index = myNews.findIndex(element => element.objectID === news.objectID)
    myNews.splice(index, 1)
    await this.storage.set('favorites', JSON.stringify(myNews))
    this.getFavoritesNews()
  }



  goToUrl(url: string) {
    console.log('goToUrl:', url)
    window.open(url, '_blank')
  }


}
