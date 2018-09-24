import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {SortPipe} from './pipes/sort.pipe';
import {ListComponent} from './components/list/list.component';
import {FethService} from "./services/feth.service";
import {AppRoutingModule} from "./app.routing";
import {SingleItemComponent} from './components/list/single-item/single-item.component';
import {LoaderComponent} from './components/loader/loader.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CustomHttpInterceptor} from "./services/http-interceptor.service";
import {FilterPipe} from "./pipes/filter.pipe";
import {FormsModule} from '@angular/forms';
import {PopupComponent} from './components/popup/popup.component';
import {BeerViewComponent} from './components/beer-view/beer-view.component';
import {FavoritesComponent} from './components/favorites/favorites.component';
import {FavoritesService} from "./services/favorites.service";
import {APP_BASE_HREF} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    FilterPipe,
    ListComponent,
    SingleItemComponent,
    LoaderComponent,
    PopupComponent,
    BeerViewComponent,
    FavoritesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    NgbModule
  ],
  providers: [
    FethService,
    {
      provide: APP_BASE_HREF,
      useValue: '/beers',
    },
    FavoritesService, {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
