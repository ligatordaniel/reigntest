import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options-buttons',
  templateUrl: './options-buttons.component.html',
  styleUrls: ['./options-buttons.component.scss']
})
export class OptionsButtonsComponent implements OnInit {

  currentRoute: string;

  constructor(private router:Router) { }

  ngOnInit() {
    this.currentRouteIs(this.router.url);
  }

  goToAll() {
    this.router.navigate(['/news']);
    this.currentRouteIs('news');
  }

  goToFavorites() {
    this.router.navigate(['/favorites']);
    this.currentRouteIs('favorites');
  }

  currentRouteIs(route: string) {
    return this.currentRoute === route;
  }

}
