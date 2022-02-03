import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NewsComponent } from './pages/news/news.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    NewsComponent,
    NewsDetailsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    InfiniteScrollModule,
  ]
})
export class PagesModule { }
