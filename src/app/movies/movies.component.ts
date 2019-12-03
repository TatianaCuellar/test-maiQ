import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private appDataService: AppService) {
  }

  ngOnInit() {
    this.getMovies();
  }
  getMovies() {
    this.appDataService.getInfoRegister().subscribe(respo => {
      console.log(respo);
    });
  }


}
