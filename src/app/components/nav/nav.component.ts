import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
  animations: [
    trigger("navToggle", [
      transition(':enter', [
        style({top: -window.innerHeight }),
        animate('500ms ease-in-out', style({ top: 0 }))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ top: -window.innerHeight }))
      ])
    ])
  ]
})
export class NavComponent implements OnInit {
  extended = false

  constructor() { }

  ngOnInit(): void {
  }

}
