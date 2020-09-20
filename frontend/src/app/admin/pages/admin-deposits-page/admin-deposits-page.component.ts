import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-deposits-page',
  templateUrl: './admin-deposits-page.component.html',
  styleUrls: ['./admin-deposits-page.component.scss']
})
export class AdminDepositsPageComponent implements OnInit {
  @HostBinding('class') classList = 'main-content';

  constructor() {
  }

  ngOnInit(): void {
  }

}
