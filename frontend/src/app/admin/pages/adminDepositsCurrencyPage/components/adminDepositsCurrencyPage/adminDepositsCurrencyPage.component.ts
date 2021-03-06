import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {DepositService} from '../../../../../client/services/deposit.service';
import {QueryParams} from '@ngrx/data';
import {first, mergeMap, toArray} from 'rxjs/operators';
import {Deposit} from '../../../../../models/deposit';

@Component({
  selector: 'app-deposit-currency-page',
  templateUrl: './adminDepositsCurrencyPage.component.html',
  styleUrls: ['./adminDepositsCurrencyPage.component.scss']
})
export class AdminDepositsCurrencyPageComponent implements OnInit {
  @HostBinding('class') classList = 'main-content';

  currency: string;
  clientId: number;
  isPopupVisible = false;
  deposits: Deposit[] = [];

  constructor(
    private route: ActivatedRoute,
    private depositService: DepositService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.currency = param.currency;
      this.clientId = param.clientId;
      this.fetchDeposits();
    });
  }

  openCompleteDepositModal(): void {
    this.isPopupVisible = true;
  }

  hideModal(): void {
    this.isPopupVisible = false;
  }

  private fetchDeposits(): void {
    const params: QueryParams = {
      currency: this.currency
    };
    if (this.clientId) {
      params.clientId = this.clientId.toString();
    }
    params.admin = 'true';
    this.depositService.getWithQuery(params).pipe(
      first(),
      mergeMap((deposits, _) => {
        return deposits.filter(dep => (dep.status === 'in processing'));
      }),
      toArray()
    ).subscribe(
      deposits => {
        this.deposits = deposits;
      }
    );
  }
}
