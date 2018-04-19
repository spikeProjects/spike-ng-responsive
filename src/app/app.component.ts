import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'spike-ng-responsive';

  ngOnInit() {
    const body: HTMLElement = document.body;
    const width = body.offsetWidth;
    const height = body.offsetHeight;
    console.log();  // 377 202
    const span = document.createElement('span');
    span.innerHTML = 'window width is:' + width + 'px; ' + height + 'px';
    document.body.appendChild(span);

  }
}
