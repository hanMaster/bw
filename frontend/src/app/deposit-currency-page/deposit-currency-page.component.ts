import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-deposit-currency-page',
  templateUrl: './deposit-currency-page.component.html',
  styleUrls: ['./deposit-currency-page.component.scss']
})
export class DepositCurrencyPageComponent implements OnInit {
  @HostBinding('class') classList = 'main-content';

  currency: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.currency = param.currency;
    });
  }

  newDeposit(): void {
    console.log('Creating new deposit in', this.currency);
  }
}
