import {Component, ViewEncapsulation} from '@angular/core';
import {LoaderService} from '../../services/loader.service';

declare let document: Document;

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isVisible = false;
  text = 'Saving in progress';

  private counter = 0;

  constructor(private loaderService: LoaderService) {
    this.loaderService.loaderEventStream.subscribe((data: { isVisible: boolean, text?: string }) => {
      if (data.isVisible) {
        this.counter++;
        if (!this.isVisible) {
          if (data.text) {
            this.text = data.text;
          }
          this.isVisible = true;
          document.body.classList.add('overflow-hidden');
        }
      } else {
        this.counter--;
        if (!this.counter) {
          this.isVisible = false;
          document.body.classList.remove('overflow-hidden');
        }
      }
    })
  }
}
