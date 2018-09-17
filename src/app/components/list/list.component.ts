import {Component, OnInit} from '@angular/core';
import {FethService} from "../../services/feth.service";
import {ActivatedRoute} from "@angular/router";
import {Beer} from "../../interface/Beer";
import {LoaderService} from '../../services/loader.service';

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
      .subscribe((data: Beer) => {
        this.beers = data;
        console.log(this.beers);
      });
  }

  constructor(private fethService: FethService, private route: ActivatedRoute, private loaderService: LoaderService) {
    this.showConfig();
  }

  ngOnInit() {
  }

}
