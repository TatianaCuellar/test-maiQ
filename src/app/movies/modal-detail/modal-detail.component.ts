import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-detail',
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.scss']
})
export class ModalDetailComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) {
  }

  @Input() detail;
  hostPhoto = 'https://image.tmdb.org/t/p/original/';

  ngOnInit() {
    console.log(this.detail);
  }

}
