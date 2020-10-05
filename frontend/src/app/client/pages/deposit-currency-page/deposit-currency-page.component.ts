import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {WindowScrolling} from '../../../shared/services/windowScrolliing.service';

@Component({
  selector: 'app-deposit-currency-page',
  templateUrl: './deposit-currency-page.component.html',
  styleUrls: ['./deposit-currency-page.component.scss']
})
export class DepositCurrencyPageComponent implements OnInit {
  @HostBinding('class') classList = 'main-content';

  currency: string;
  isPopupVisible = false;

  constructor(
    private route: ActivatedRoute,
    private scrollService: WindowScrolling
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.currency = param.currency;
    });
  }

  newDeposit(): void {
    this.isPopupVisible = true;
    this.scrollService.disable();
  }

  hideModal(): void {
    this.isPopupVisible = false;
    this.scrollService.enable();
  }
}
