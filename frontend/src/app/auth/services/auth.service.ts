import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthRequestInterface} from '../types/authRequest.interface';
import {CurrentUser} from '../../models/currentUser';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable()

export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(credentials: AuthRequestInterface): Observable<CurrentUser> {
    return this.http.get(`${environment.apiUrl}/csrf-cookie`).pipe(
      switchMap((response) => {
        return this.http.post<CurrentUser>(`${environment.apiUrl}/login`, credentials);
      })
    );
  }

  getCurrentUser(): Observable<CurrentUser> {
    const url = `${environment.apiUrl}/user`;
    return this.http.get<CurrentUser>(url);
  }

  logout(): Observable<{}> {
    return this.http.post(`${environment.apiUrl}/logout`, {});
  }

}
