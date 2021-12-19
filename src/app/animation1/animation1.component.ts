import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-animation1',
  templateUrl: './animation1.component.html',
  styleUrls: ['./animation1.component.sass']
})
export class Animation1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline()
    .from("#header-hello", {
      duration: 0.5,
      ease: "power1.inOut",
      color: "transparent",
      display: "none"
    })
    .to("#header-hello", {
      duration: 2,
      ease: "power1.inOut",
      color: "transparent",
      display: "none"
    })
    .set("#header-niri", {
      display: "block"
    })
    .from("#header-we-are", {
      duration: 1,
      ease: "power1.inOut",
      color: "transparent",
      display: "none"
    }).from("#header-niri", {
      duration: 1,
      ease: "power1.inOut",
      color: "transparent",
      display: "none"
    })

    gsap.timeline({repeat: -1})
    .to("#scroll-down-icon", {
      color: "transparent",
      duration: 1,
      ease: "power1.inOut",
    }).to("#scroll-down-icon", {
      color: "#ffffff",
      duration: 1,
      ease: "power1.inOut",
    })

    gsap.to("#section2", {
      x: -window.innerWidth,
      scrollTrigger: {
        scrub: 1,
        trigger: "#section1",
        pin: "#main1_group",
        snap: 1
      }
    })
  }
}
