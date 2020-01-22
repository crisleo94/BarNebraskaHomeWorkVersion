import { Component, OnInit } from '@angular/core';
import * as material from '../../../assets/js/materialize.min.js';
import { SendOpinionService } from 'src/app/services/send-opinion.service.js';
import { Contact } from 'src/app/models/contact.js';
import { NgForm } from '@angular/forms';
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

  contact: Contact;

  constructor(private sendOpinion: SendOpinionService) {
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

  onSubmit(form: NgForm) {
    if(form.invalid) { return; }
    this.sendOpinion.postOpinion(this.contact).subscribe( data => {
      this.contact = data;
      console.log(data);
    })
  }

}
