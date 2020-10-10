import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-deposit-page',
  templateUrl: './deposit-page.component.html',
  styleUrls: ['./deposit-page.component.scss']
})
export class DepositPageComponent implements OnInit {
  @HostBinding('class') classList = 'main-content';

  constructor() {
  }

  ngOnInit(): void {
  }

}
