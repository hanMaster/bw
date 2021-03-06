import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-deposit-currency-page',
  templateUrl: './adminDepositCurrencyCompletedPage.component.html',
  styleUrls: ['./adminDepositCurrencyCompletedPage.component.scss']
})
export class AdminDepositsCurrencyCompletedPageComponent implements OnInit {
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

  newDeposit(): void {
    this.isPopupVisible = true;
  }

  hideModal(): void {
    this.isPopupVisible = false;
  }
}
