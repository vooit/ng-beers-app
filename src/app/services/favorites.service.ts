import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private itemsInFavListSubject: BehaviorSubject = new BehaviorSubject(<any[]>);
  private itemsInFav: any = ['pooopooo', 'pooopooo2'];

  constructor() {
    this.itemsInFavListSubject.subscribe(item => this.itemsInFav = item);
  }

  addToFavorites(item) {
    console.log('addToFavorites')
    this.itemsInFavListSubject.next([...this.itemsInFav, item]);
  }

  getItems() {
    return this.itemsInFavListSubject;
  }

  removeFromFav(item) {
    console.log('addToFavorites')
    const currentItems = [...this.itemsInFav];
    const itemsFiltered = currentItems.filter(el => el.id !== item.id);
    this.itemsInFavListSubject.next(itemsFiltered);
  }
}




