import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderEventSource = new ReplaySubject();
  loaderEventStream = this.loaderEventSource.asObservable();

  constructor() {
  }

  show(text: string) {
    this.loaderEventSource.next({
      isVisible: true,
      text: text
    });
  }

  close() {
    this.loaderEventSource.next({
      isVisible: false
    });
  }
}
