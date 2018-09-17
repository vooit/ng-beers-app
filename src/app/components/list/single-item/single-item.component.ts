import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {
  @Input() beer: Object;
  constructor() { }

  ngOnInit() {
  }

}
