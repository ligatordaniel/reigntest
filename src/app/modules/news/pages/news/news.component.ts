import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/core/services/api/news-service.service';
import { LocalStorageService } from 'src/app/core/services/storageService/local-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public allNews: any[] = [];
  public loading: boolean = true

  constructor(
    private newsService: NewsServiceService,
    private storage: LocalStorageService,
  ) { }

  async ngOnInit() {
    await this.getNews(0, 'angular')
    console.log(this.allNews)
    this.setFavorite()
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

  loadAngular(page: number) {
    this.getNews(page, 'angular')
  }

  loadReact(page: number) {
    this.getNews(page, 'reactjs')
  }

  loadVue(page: number) {
    this.getNews(page, 'vuejs')
  }


  async markAsFavorite(id: string) {
    console.log(id)
    let favorites = await this.storage.get('favorites')
    if (favorites) {
      favorites = JSON.parse(favorites)
    }
    else {
      favorites = []
    }
    favorites.push(id)
    await this.storage.set('favorites', JSON.stringify(favorites))
    this.setFavorite()
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

