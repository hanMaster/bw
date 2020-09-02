import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'aside',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @HostBinding('class') classList = 'main-nav';
  constructor() { }

  ngOnInit(): void {
  }

}
