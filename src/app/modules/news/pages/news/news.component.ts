import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/core/services/api/news-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public allNews: any[] = [];
  public loading: boolean = true

  constructor(
    private newsService: NewsServiceService
  ) { }

  async ngOnInit() {
    await this.getNews(0, 'angular')
    console.log(this.allNews)
  }

  async getNews(page: number, frameWork: string) {
    try {
      this.loading = true
      const res = await this.newsService.getAllNews(page, frameWork)
      this.allNews = res.hits
      this.loading = false
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

  markAsFavorite(id: string) {
    console.log(id)
  }

}

