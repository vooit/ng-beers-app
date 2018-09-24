import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class FethService {
  // private itemsPerPage = 15;
  private url = `https://api.punkapi.com/v2/beers`;
  // private pageNumber = 1;
  private cache = null;

  constructor(private http: HttpClient, private router: Router) {
  }

  getData() {
    if(this.cache) {
      return new Observable(observer => {
        observer.next(this.cache);
      })
    }
    return this.http.get(this.url).map(data => this.cache = data);
  }

  getBeer(id) {
    return this.http.get(`${this.url}/${id}`);
  }
}
