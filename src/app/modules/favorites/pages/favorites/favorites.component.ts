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
  public allNews: any[] = []
  public showMessageNoFavorites: boolean = true

  constructor(
    private newsService: NewsServiceService,
    private storage: LocalStorageService,
  ) { }

  async ngOnInit() {
    this.favoritesNews()
  }

  async getNews(page: number, frameWork: string) {
    try {
      this.loading = true
      const res = await this.newsService.getAllNews(page, frameWork)
      this.allNews = res.hits
      this.loading = false
      this.setFavorite()
    }
    catch (error) {
      console.log(error)
    }
  }

  async favoritesNews(){
    let favorites = await this.storage.get('favorites')
    if (favorites) {
      favorites = JSON.parse(favorites)
      favorites = favorites.map(element => Number(element))
      this.allFavoriteNews = await Promise.all(favorites.map(async(element) => {
        return await this.newsService.getNewsById(element)
      }))
      this.allFavoriteNews = this.allFavoriteNews.filter(element => element != null)
      this.loading = false
      console.log(this.allFavoriteNews)
    } else {
      this.allFavoriteNews = []
      console.log('no hay favoritos')
      this.loading = false
      this.showMessageNoFavorites = false
    }
    
  }

  async getNewsById(id: number) {
    try {
      this.loading = true
      const res = await this.newsService.getNewsById(id)
    }
    catch (error) {
      console.log(error)
      this.loading = false
    }
  }

  loadAngular(page: number) {
    this.getNews(page, 'angular')
  }

  loadReact(page: number) {
    this.getNews(page, 'reactjs')
  }

  loadVue(page: number) {
    this.getNews(page, 'vuejs')
  }


  async markAsFavorite(created_at:string, story_title:string, story_url:string, story_id:string) {
    let favorites = await this.storage.get('favorites')
    if (favorites) {
      favorites = JSON.parse(favorites)
    }
    else {
      favorites = []
    }
    //agregar objeto a array de objetos
    let addNewFavorite = {
      created_at,
      story_title,
      story_url,
      story_id,
    }
    favorites = [...favorites, addNewFavorite]
    await this.storage.set('favorites', favorites)
    console.log('funciono', await this.storage.get('favorites'))
  }


  async setFavorite() {
    let favorites = await this.storage.get('favorites')
    if (favorites) {
      favorites = JSON.parse(favorites)
    }
    else {
      favorites = []
    }
    this.allNews.forEach(news => {
      if (favorites.includes(news.objectID)) {
        news.favorite = true
      }else{
        news.favorite = false
      }
    })
  }

  async removeFavorite(id: string) {
    let favorites = await this.storage.get('favorites')
    if (favorites) {
      favorites = JSON.parse(favorites)
    }
    else {
      favorites = []
    }
    // buscar el indice del id en el array
    const index = favorites.indexOf(id)
    if (index > -1) {
      // eliminar el elemento del array
      favorites.splice(index, 1)
      await this.storage.set('favorites', JSON.stringify(favorites))
      this.setFavorite()
    }
  }

}
