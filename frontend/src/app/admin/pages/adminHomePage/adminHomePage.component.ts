import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';

import {RatesInterface} from '../../../models/rates.interface';
import {RatesService} from '../../../shared/services/rates.service';


@Component({
  selector: 'app-admin-home-page',
  templateUrl: './adminHomePage.component.html',
  styleUrls: ['./adminHomePage.component.scss']
})
export class AdminHomePageComponent implements OnInit, OnDestroy {

  rates: RatesInterface;
  rSub: Subscription;
  modalVisible = false;

  @HostBinding('class') classList = 'main-content';

  constructor(
    private store: Store,
    private ratesService: RatesService
  ) {
  }

  ngOnInit(): void {
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
    this.modalVisible = true;
  }

  hideModal(): void {
    this.modalVisible = false;
  }

}
