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

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    ListComponent,
    SingleItemComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FethService, {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
