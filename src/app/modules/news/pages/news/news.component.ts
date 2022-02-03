import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/core/services/api/news-service.service';
import { LocalStorageService } from 'src/app/core/services/storageService/local-storage.service';


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
  }

  async getNews(page: number, frameWork: string) {
    try {
      this.loading = true
      const res = await this.newsService.getAllNews(page, frameWork)
      this.allNews = res.hits
      this.loading = false
      this.setFavorite(this.allNews)
      this.setRead(this.allNews)
    }
    catch (error) {
      console.log('getNews error:', error)
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

  async markAsFavorite(news: any) {
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
      //delete if it is already in read
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
      //if they shared id set isFavorite to true or false
      myNews = myNews.map(element => {
        element.isFavorite = favorites.find(favorite => favorite.objectID === element.objectID) ? true : false
        return element
      })
    }
    this.allNews = myNews
  }


  goToUrl(news: any) {
    this.markAsRead(news)
    console.log('goToUrl:', news.story_url)
    window.open(news.story_url, '_blank')
  }


  async setRead(news: any) {
    let read = await this.storage.get('read')
    let myNews = this.allNews
    if (read) {
      read = JSON.parse(read)
      //if they shared id set isFavorite to true or false
      myNews = myNews.map(element => {
        element.isRead = read.find(read => read.objectID === element.objectID) ? true : false
        return element
      })
    }
    this.allNews = myNews
    console.log('setRead:', this.allNews)
  }

}

