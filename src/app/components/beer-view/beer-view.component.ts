import {Component, OnInit} from '@angular/core';
import {FethService} from '../../services/feth.service';
import {ISubscription} from 'rxjs/Subscription';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-beer-view',
  templateUrl: './beer-view.component.html',
  styleUrls: ['./beer-view.component.scss']
})
export class BeerViewComponent implements OnInit {
  private id: number;
  beer: object;
  private beerSub: ISubscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fethService: FethService) {
    this.route.params.subscribe(params => this.id = params['id']);
    this.beerSub = this.fethService.getBeer(this.id).subscribe(data => {
      console.log(data);
      this.beer = data[0];
    });
  }

  ngOnInit() {
  }
}
