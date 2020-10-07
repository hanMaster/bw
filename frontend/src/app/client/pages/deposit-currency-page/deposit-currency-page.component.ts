import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {WindowScrolling} from '../../../shared/services/windowScrolliing.service';
import {Observable} from 'rxjs';
import {Deposit} from '../../../models/deposit';
import {DepositService} from '../../services/deposit.service';
import {QueryParams} from '@ngrx/data';
import {filter, first, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-deposit-currency-page',
  templateUrl: './deposit-currency-page.component.html'
})
export class DepositCurrencyPageComponent implements OnInit {
  @HostBinding('class') classList = 'main-content';

  currency: string;
  isPopupVisible = false;
  deposits: Deposit[] = [];
  loading$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private scrollService: WindowScrolling,
    private depositService: DepositService
  ) {
    this.loading$ = this.depositService.loading$;
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.currency = param.currency;
      this.fetchDeposits();
    });
  }

  newDeposit(): void {
    this.isPopupVisible = true;
    this.scrollService.disable();
  }

  hideModal(): void {
    this.isPopupVisible = false;
    this.scrollService.enable();
    this.fetchDeposits();
  }

  private fetchDeposits(): void {
    const params: QueryParams = {
      currency: this.currency
    };
    this.depositService.getWithQuery(params).pipe(first()).subscribe(
      deposits => {
        this.deposits = deposits;
      }
    );
  }
}
