import { Component, OnDestroy, OnInit } from '@angular/core';

import { ScrollTrigger } from "gsap/ScrollTrigger";


@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.sass']
})
export class PageAboutComponent implements OnDestroy {

  constructor() { }

  ngOnDestroy(): void {
    let tr = ScrollTrigger.getAll()
    console.log(tr);

    tr.forEach((tr) => tr.kill())

    console.log("about destroy");


    ScrollTrigger.refresh()
  }

}
