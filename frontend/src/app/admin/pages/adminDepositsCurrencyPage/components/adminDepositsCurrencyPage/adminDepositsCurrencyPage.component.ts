import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-deposit-currency-page',
  templateUrl: './adminDepositsCurrencyPage.component.html',
  styleUrls: ['./adminDepositsCurrencyPage.component.scss']
})
export class AdminDepositsCurrencyPageComponent implements OnInit {
  @HostBinding('class') classList = 'main-content';

  currency: string;
  isPopupVisible = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.currency = param.currency;
    });
  }

  openCompleteDepositModal(): void {
    this.isPopupVisible = true;
  }

  hideModal(): void {
    this.isPopupVisible = false;
  }
}
