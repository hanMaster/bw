import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RatesInterface} from '../types/rates.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RatesService {
  url = 'https://cors-anywhere.herokuapp.com/http://www.cbr.ru/scripts/XML_daily.asp';

  constructor(private http: HttpClient) {
  }

  getRates(): Observable<RatesInterface> {
    return this.http.get(this.url, {responseType: 'text'})
      .pipe(
        map((response) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, 'text/xml');
          const valueUsd = xmlDoc.getElementsByTagName('Value')[10].childNodes[0].nodeValue;
          const valueEur = xmlDoc.getElementsByTagName('Value')[11].childNodes[0].nodeValue;
          const rates: RatesInterface = {usd: valueUsd, eur: valueEur};
          return rates;
        })
      );
  }
}
