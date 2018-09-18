import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./components/list/list.component";
import {BeerViewComponent} from "./components/beer-view/beer-view.component";

const appRoutes: Routes = [
  {
    path: '',
    component: ListComponent
  }, {
    path: 'beers',
    component: ListComponent
  }, {
    path: 'beer/:id',
    component: BeerViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
