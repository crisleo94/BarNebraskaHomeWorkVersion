import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import * as material from '../../../assets/js/materialize.min.js';
import { Contact } from '../../models/contact'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carouselOptions = {
    fullScreen: true,
    indicators: true
  };

  fabOptions = {
    hoverEnabled: false
  };

  modalOptions = {
    onCloseEnd: this.onSubmit()
  }

  contact = new Contact('', '');
  API_URI = 'https://api-bar-nebraska.herokuapp.com/savecontact';

  constructor(private http: HttpClient) {
    console.log(this.contact);
  }

  ngOnInit() {
    this.carousel();
    this.fabButton();
    this.modal();
  }

  carousel() {
    const element = document.querySelectorAll('.carousel');
    const instance = material.Carousel.init(element, this.carouselOptions);
  }

  fabButton() {
    const element = document.querySelectorAll('.fixed-action-btn');
    const instance = material.FloatingActionButton.init(element, this.fabOptions);
  }

  modal() {
    const element = document.querySelectorAll('.modal');
    const instance = material.Modal.init(element);
  }

  onSubmit() {
    return this.http.post(this.API_URI, this.contact).toPromise()
      .then(req => {
        console.log(req);
        this.contact.email = '';
        this.contact.message = '';
      }).catch(err => {
        if(err) {
          console.error(err);
        }
      })
  }

}
