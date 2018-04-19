import { Component, OnInit } from '@angular/core';

import * as Hammer from 'hammerjs';
import { Manager, Swipe } from 'hammerjs';

@Component({
  selector: 'app-hammer',
  templateUrl: './hammer.component.html',
  styleUrls: ['./hammer.component.sass']
})
export class HammerComponent implements OnInit {

  constructor() {
    console.log('in constructor', Hammer);
  }

  ngOnInit() {
    const advs = document.querySelector('.hammerTest');

    const manager = new Manager(advs);
    const swipe = new Hammer.Swipe();
    manager.add(swipe);
    manager.on('swipeleft', (e) => {
      console.log('swipeleft', e);
    });
    manager.on('swiperight', (e) => {
      console.log('swiperight', e);
    });
  }

  ondrag(event: any) {
    console.log(event);
  }

}
