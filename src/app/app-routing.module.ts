import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: 'news', loadChildren: () => import('./modules/news/pages.module').then(m => m.PagesModule) }, 

  { path: 'favorites', loadChildren: () => import('./modules/favorites/pages.module').then(m => m.PagesModule) },

  { path: 'about', loadChildren: () => import('./modules/about/pages.module').then(m => m.PagesModule) },
  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
