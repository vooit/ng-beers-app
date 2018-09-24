import {Component, OnInit} from '@angular/core';
import {FavoritesService} from '../../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public favoriteListItems:any = [];

  constructor(private favoritesService: FavoritesService) {
    this.favoritesService.getItems().subscribe(el => {
      console.log(el);
      this.favoriteListItems = el;
    });
  }
  ngOnInit() {
  }
}

