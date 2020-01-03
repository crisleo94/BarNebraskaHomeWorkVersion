import { Component, OnInit } from '@angular/core';
import * as material from '../../../assets/js/materialize.min.js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.menu();
  }

  menu() {
    const element = document.querySelectorAll('.sidenav');
    const instance = material.Sidenav.init(element);
  }

}
