import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
import {FavoritesService} from '../../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public favaoritesItems$ = of([]);
  public favoriteListItems:any = [];

  constructor(private favoritesService: FavoritesService) {
    this.favaoritesItems$ = this
      .favoritesService
      .getItems();

    this.favaoritesItems$.subscribe(el => this.favoriteListItems = el);
  }
  ngOnInit() {
  }
}

