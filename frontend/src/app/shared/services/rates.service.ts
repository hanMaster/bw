import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {RatesInterface} from '../../models/rates.interface';
import {map} from 'rxjs/operators';
import {UtilsService} from './utils.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RatesService {

  constructor(private http: HttpClient, private utilsService: UtilsService) {
  }

  getRates(): Observable<RatesInterface> {
    const savedRates = localStorage.getItem('rates');
    if (savedRates) {
      const parsedRates: RatesInterface = JSON.parse(savedRates);
      const currentDate = this.utilsService.startOfDay(new Date());
      if (currentDate.getTime() === new Date(parsedRates.date).getTime()) {
        return of(parsedRates);
      } else {
        return this.downloadRates();
      }
    } else {
      return this.downloadRates();
    }
  }

  downloadRates(): Observable<RatesInterface> {
    return this.http.get(environment.ratesUrl, {responseType: 'text'})
      .pipe(
        map((response) => {
          const dd = response.substr(60, 2);
          const MM = response.substr(63, 2);
          const YYYY = response.substr(66, 4);
          const date = new Date(`${MM}.${dd}.${YYYY}`);
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, 'text/xml');
          const valueUsd = xmlDoc.getElementsByTagName('Value')[10].childNodes[0].nodeValue;
          const valueEur = xmlDoc.getElementsByTagName('Value')[11].childNodes[0].nodeValue;
          const rates: RatesInterface = {date: date.toString(), usd: valueUsd, eur: valueEur};
          localStorage.setItem('rates', JSON.stringify(rates));
          return rates;
        })
      );
  }
}
