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

  private isAdded = false;

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
    this.isAdded = true;
  }

  removeFromFav(item) {
    console.log('removed fromFavorites');
    this.favoritesService.removeFromFav(item);
    this.isAdded = false;
  }
}
