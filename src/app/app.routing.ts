import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./components/list/list.component";
import {BeerViewComponent} from "./components/beer-view/beer-view.component";
import {FavoritesComponent} from "./components/favorites/favorites.component";

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
  }, {
    path: 'favorites',
    component: FavoritesComponent
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
