import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {RatesService} from '../services/rates.service';
import {Observable, Subscription} from 'rxjs';
import {RatesInterface} from '../types/rates.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  rates: RatesInterface;
  currentDate = new Date();
  rSub: Subscription;
  @HostBinding('class') classList = 'main-content';

  constructor(private ratesService: RatesService) {
  }

  ngOnInit(): void {
    this.rSub = this.ratesService.getRates().subscribe((rates) => {
      this.rates = rates;
    });
  }

  ngOnDestroy(): void {
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }

}
