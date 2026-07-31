import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as AOS from 'aos';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit, AfterViewInit {

  ngOnInit() {
    AOS.init({
      once: true,
      duration: 800,
      offset: 100,
      easing: 'ease-in-out'
    });
  }

  ngAfterViewInit() {

    // AOS fix
    setTimeout(() => {
      AOS.refreshHard();
    }, 150);

    // Typed.js
    setTimeout(() => {
      new Typed('.typed', {
        strings: ['Developer', 'Freelancer'],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
      });
    }, 200);

  }
}