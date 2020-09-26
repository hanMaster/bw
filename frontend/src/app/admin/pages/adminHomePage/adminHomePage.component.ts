import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {RatesInterface} from '../../../types/rates.interface';
import {RatesService} from '../../../shared/services/rates.service';
import {isPopupVisibleSelector} from '../../clients/store/selectors';
import {hideClientModalAction, showClientModalAction} from '../../clients/store/actions/requestClients.actions';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './adminHomePage.component.html',
  styleUrls: ['./adminHomePage.component.scss']
})
export class AdminHomePageComponent implements OnInit, OnDestroy {

  rates: RatesInterface;
  rSub: Subscription;
  isPopupVisible$: Observable<boolean>;

  @HostBinding('class') classList = 'main-content';

  constructor(
    private store: Store,
    private ratesService: RatesService
  ) {
  }

  ngOnInit(): void {
    this.isPopupVisible$ = this.store.pipe(select(isPopupVisibleSelector));
    this.rSub = this.ratesService.getRates().subscribe(
      (rates: RatesInterface) => {
        this.rates = rates;
      });
  }

  ngOnDestroy(): void {
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }

  newClient(): void {
    this.store.dispatch(showClientModalAction());
  }

  hideModal(): void {
    this.store.dispatch(hideClientModalAction());
  }

}
