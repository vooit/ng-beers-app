import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
  @Input() beer;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToBeer(event, id) {
    console.log(event, id);
    // let id = event.beer.id;
    this.router.navigate(['/beer/', id]);
  }

}
