import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {RatesInterface} from '../../../types/rates.interface';
import {RatesService} from '../../../shared/services/rates.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.scss']
})
export class AdminHomePageComponent implements OnInit, OnDestroy {

  rates: RatesInterface;
  rSub: Subscription;
  @HostBinding('class') classList = 'main-content';

  constructor(private ratesService: RatesService) {
  }

  ngOnInit(): void {
    console.log('admin home');
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

}
