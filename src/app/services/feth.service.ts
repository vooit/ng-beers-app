import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class FethService {
  private itemsPerPage = 15;
  private url = `https://api.punkapi.com/v2/beers`;
  private pageNumber = 1;

  constructor(private http: HttpClient, private router: Router) {
  }

  getData() {
    return this.http.get(this.url);
  }

  getBeer(id) {
    return this.http.get(`${this.url}/${id}`);
  }
}
