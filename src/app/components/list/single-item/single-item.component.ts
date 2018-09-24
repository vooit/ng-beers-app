import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FavoritesService} from '../../../services/favorites.service';

@Component({
  selector: 'single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
  @Input() beer;

  constructor(private router: Router, private favoritesService: FavoritesService) {
  }

  ngOnInit() {
  }

  goToBeer(event, id) {
    console.log(event, id);
    this.router.navigate(['/beer/', id]);
  }

  addToFavorites(item) {
    console.log('addToFavorites');
    this.favoritesService.addToFavorites(item);
  }

  removeFromFav(item) {
    this.favoritesService.removeFromFav(item);
  }
}
