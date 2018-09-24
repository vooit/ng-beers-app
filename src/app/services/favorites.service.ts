import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private itemsInFavListSubjectStream = new ReplaySubject();
  private obsr = this.itemsInFavListSubjectStream.asObservable();
  private itemsInFav: any = [];

  constructor() {
    this.obsr.subscribe(item => {
      console.log(item);
      this.itemsInFav = item;
    });
  }

  addToFavorites(item) {
    console.log('addToFavorites', this.itemsInFav, item);
    this.itemsInFavListSubjectStream.next([...this.itemsInFav, item]);
  }

  getItems() {
    return this.obsr;
  }

  removeFromFav(item) {
    console.log('addToFavorites');
    const currentItems = [...this.itemsInFav];
    const itemsFiltered = currentItems.filter(el => el.id !== item.id);
    this.itemsInFavListSubjectStream.next(itemsFiltered);
  }
}




