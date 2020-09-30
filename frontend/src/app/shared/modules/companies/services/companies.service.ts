import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {RussCompanyInterface} from '../../../../types/russCompany.interface';
import {environment} from '../../../../../environments/environment';

@Injectable()
export class CompaniesService {
  constructor(private http: HttpClient) {
  }

  getUserCompanies(): Observable<RussCompanyInterface[]> {
    return this.http.get<RussCompanyInterface[]>(`${environment.apiUrl}/companies`);
  }

  addCompany(company: RussCompanyInterface): Observable<RussCompanyInterface> {
    return this.http.post<RussCompanyInterface>(`${environment.apiUrl}/companies`, company);
  }

  updateCompany(company: RussCompanyInterface): Observable<RussCompanyInterface> {
    return this.http.put<RussCompanyInterface>(`${environment.apiUrl}/companies`, company);
  }
}
