import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NgbActiveModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalDetailComponent } from './movies/modal-detail/modal-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ModalDetailComponent
  ],
  imports: [
    NgbModalModule,
    HttpModule,
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalDetailComponent
  ],
  exports: [ ModalDetailComponent ]
})
export class AppModule { }
