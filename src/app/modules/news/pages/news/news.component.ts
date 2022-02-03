import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/core/services/api/news-service.service';
import { LocalStorageService } from 'src/app/core/services/storageService/local-storage.service';
import { NewsModel } from 'src/app/shared/models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public allNews: Array<NewsModel> = [];
  public loading: boolean = true
  public scrollLoading: boolean = false
  private actualPage: number = 0
  

  constructor(
    private newsService: NewsServiceService,
    private storage: LocalStorageService,
  ) { }

  async ngOnInit() {
    await this.lastFrameworkNews()
  }

  //marcaA: MarcaAnalyticsModel = {};

  async getNews(page: number, frameWork: string) {
    try {
      this.loading = true
      const res = await this.newsService.getAllNews(page, frameWork)
      this.allNews = res.hits
      this.loading = false
      this.setFavorite(this.allNews)
      this.setRead(this.allNews)
      //this.parserNewsData(this.allNews)
    }
    catch (error) {
      console.log('getNews error:', error)
      this.loading = false
    }
  }

  //falta arreglar parseo Dani
  parserNewsData(news: any) {
    //eliminar elementos de mi array de objetos
    news = news.map(element => {
      delete element.created_at
      delete element.author
      delete element.story_title
      delete element.story_url
      return element
    })
    this.allNews = news
  }


  async lastFrameworkNews() {
    const LastFrameWork = await this.storage.get('stateFrameWork')
    if (!LastFrameWork || 'angular') this.loadAngular(0)
    if (LastFrameWork === 'reactjs') this.loadReact(0)
    if (LastFrameWork === 'vuejs') this.loadVue(0)
  }

  async loadAngular(page: number) {
    this.getNews(page, 'angular')
    await this.storage.set('stateFrameWork', 'angular')
  }

  async loadReact(page: number) {
    this.getNews(page, 'reactjs')
    await this.storage.set('stateFrameWork', 'reactjs')
  }

  async loadVue(page: number) {
    this.getNews(page, 'vuejs')
    await this.storage.set('stateFrameWork', 'vuejs')
  }

  async markAsFavorite(news: NewsModel) {
    let favorites = await this.storage.get('favorites') 
    if (!favorites) {
      favorites = []
      favorites.push(news)
      await this.storage.set('favorites', JSON.stringify(favorites))
      return
    }
    favorites = JSON.parse(favorites)
    if (favorites.find(element => element.objectID === news.objectID)) {
      //delete if it is already in favorites
      favorites.splice(favorites.indexOf(news), 1)
    }else{
      favorites.push(news)
    }
    await this.storage.set('favorites', JSON.stringify(favorites))
    this.setFavorite(this.allNews)
    this.setRead(this.allNews)
  }

  async markAsRead(news: any) {
    let read = await this.storage.get('read')
    if (!read) {
      read = []
      read.push(news)
      await this.storage.set('read', JSON.stringify(read))
      return
    }
    read = JSON.parse(read)
    if (read.find(element => element.objectID === news.objectID)) {
      //delete if it is already read
      read.splice(read.indexOf(news), 1)
    }else{
      read.push(news)
    }
    await this.storage.set('read', JSON.stringify(read))
    this.setRead(this.allNews)
    this.setFavorite(this.allNews)
  }


  async setFavorite(news: any) {
    let favorites = await this.storage.get('favorites') 
    let myNews = news
    if (favorites) {
      favorites = JSON.parse(favorites)
      //if they shared objectID set isFavorite to true or false
      myNews = myNews.map(element => {
        element.isFavorite = favorites.find(favorite => favorite.objectID === element.objectID) ? true : false
        return element
      })
    }
    this.allNews = myNews
  }

  async setRead(news: any) {
    let read = await this.storage.get('read')
    let myNews = this.allNews
    if (read) {
      read = JSON.parse(read)
      //if they shared objectID set isFavorite to true or false
      myNews = myNews.map(element => {
        element.isRead = read.find(read => read.objectID === element.objectID) ? true : false
        return element
      })
    }
    this.allNews = myNews
  }

  goToUrl(news: NewsModel) {
    this.markAsRead(news)
    window.open(news.story_url, '_blank')
  }

  async onScroll() {
    this.scrollLoading = true
    const stateFrameWork = await this.storage.get('stateFrameWork')
    try {
      const page = this.actualPage ++
      let res = await this.newsService.getAllNews(page, stateFrameWork)
      res = res.hits
      let myNews = this.allNews.concat(res)
      this.allNews = myNews
      this.setFavorite(this.allNews)
      this.setRead(this.allNews)
      this.loading = false
      this.scrollLoading = false
    } catch (error) {
      console.log('error onScroll:', error)
      this.loading = false
      this.scrollLoading = false
    }
  }

  
}

