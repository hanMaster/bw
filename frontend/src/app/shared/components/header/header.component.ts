import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') classList = 'header logged-header';
  constructor() { }

  ngOnInit(): void {
  }

}
