import { Component, OnInit } from '@angular/core';


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    console.log("Initialized ScrollTrigger");

  }

}
