import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
