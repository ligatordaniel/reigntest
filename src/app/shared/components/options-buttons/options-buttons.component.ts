import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options-buttons',
  templateUrl: './options-buttons.component.html',
  styleUrls: ['./options-buttons.component.scss']
})
export class OptionsButtonsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToAll() {
    this.router.navigate(['/news']);
  }

  goToFavorites() {
    this.router.navigate(['/favorites']);
  }


}
