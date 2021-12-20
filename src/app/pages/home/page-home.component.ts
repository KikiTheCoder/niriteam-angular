import { trigger } from '@angular/animations';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.sass']
})
export class PageHomeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnDestroy(): void {
    let tr = ScrollTrigger.getAll()
    tr.forEach((tr) => tr.kill())
  }

  ngOnInit(): void {
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 5)


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
      x: () => `${window.innerWidth * -1}`,
      scrollTrigger: {
        scrub: 1,
        trigger: "#main1_group",
        pin: "#main1_group",
        start: "0px 0px",
        snap: 1,
        invalidateOnRefresh: true
      }
    })
  }
}
