import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {catchError, map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: Http
  ) { }

  public getInfoRegister() {
    return this.http
      .get( 'https://api.themoviedb.org/3/movie/now_playing?api_key=abe3c20e4784c1548ebd1bef45bb392d&page=1')
      .pipe(
        map(response => {
          const infoRegister = response.json();
          return infoRegister;
        })
      );
  }

}
