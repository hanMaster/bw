import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-deposits-page',
  templateUrl: './adminDpositsPage.component.html',
  styleUrls: ['./adminDepositsPage.component.scss']
})
export class AdminDepositsPageComponent implements OnInit {
  @HostBinding('class') classList = 'main-content';

  constructor() {
  }

  ngOnInit(): void {
  }

}
