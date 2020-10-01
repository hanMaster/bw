import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {RussCompany} from '../../../../models/russCompany';
import {environment} from '../../../../../environments/environment';

@Injectable()
export class CompaniesService {
  constructor(private http: HttpClient) {
  }

  getUserCompanies(): Observable<RussCompany[]> {
    return this.http.get<RussCompany[]>(`${environment.apiUrl}/companies`);
  }

  addCompany(company: RussCompany): Observable<RussCompany> {
    return this.http.post<RussCompany>(`${environment.apiUrl}/companies`, company);
  }

  updateCompany(company: RussCompany): Observable<RussCompany> {
    return this.http.put<RussCompany>(`${environment.apiUrl}/companies`, company);
  }
}
