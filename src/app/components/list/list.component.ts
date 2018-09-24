import {Component, OnInit} from '@angular/core';
import {FethService} from "../../services/feth.service";
import {Beer} from "../../interface/Beer";
import {LoaderService} from '../../services/loader.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  beers: Object;
  noSearchResults: boolean = null;
  order: string = 'name';
  reverse: boolean = false;

  private beersObsrv;
  private loadMoreSub;
  private beersSub;

  constructor(private fethService: FethService,
              private route: ActivatedRoute,
              private loaderService: LoaderService) {
    this.showConfig();
  }

  // showConfig() {
  //   this.fethService.getBeers()
  //     .subscribe((data: Beer) => {
  //       this.beers = data;
  //       if (!this.beers) {
  //         this.noSearchResults = true;
  //       }
  //     });
  // }
  //
  showConfig() {
    this.fethService.getBeers().subscribe( () => {
      this.fethService.beersToDisplayObservable.subscribe(beer => this.beers = beer);
    });
  }



  //
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

  loadMore() {
    this.loadMoreSub = this.fethService.getMoreBeers().subscribe( () => {
      this.beersObsrv = this.fethService.beersToDisplayObservable.subscribe(beer => this.beers = beer);
    });
  }


  ngOnInit() {
  }

}
