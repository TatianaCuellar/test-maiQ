import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalDetailComponent} from './modal-detail/modal-detail.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(
    private appDataService: AppService,
    private modalService: NgbModal,
  ) {
  }

  hostPhoto = 'https://image.tmdb.org/t/p/original/';
  movies: any;

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.appDataService.getInfoRegister().subscribe(respo => {
      this.movies = respo.results;
      console.log(this.movies);
    });
  }

  selectedDetailMovie(data) {
    const modalRef = this.modalService.open(ModalDetailComponent);
    (modalRef.componentInstance as ModalDetailComponent).detail = data;
  }


}
