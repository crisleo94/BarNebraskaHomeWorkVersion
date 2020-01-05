import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import * as material from '../../../assets/js/materialize.min.js';

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

  constructor() { }

  ngOnInit() {
    this.carousel();
    this.fabButton();
  }

  carousel() {
    const element = document.querySelectorAll('.carousel');
    const instance = material.Carousel.init(element, this.carouselOptions);
  }

  fabButton() {
    const element = document.querySelectorAll('.fixed-action-btn');
    const instance = material.FloatingActionButton.init(element, this.fabOptions);
  }

}
