import {Component, OnInit} from '@angular/core';
import {FethService} from "../../services/feth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  noSearchResults: boolean = false;
  beers: Object;

  showConfig() {
    this.fethService.getData()
      .subscribe((data) => {
        this.beers = data;
        console.log(this.beers);
      });
  }

  constructor(private fethService: FethService, private route: ActivatedRoute,) {
    this.showConfig();
  }

  ngOnInit() {
  }

}
