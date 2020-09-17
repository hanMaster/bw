import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthRequestInterface} from '../types/authRequest.interface';
import {CurrentUserInterface} from '../../types/currentUser.interface';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Injectable()

export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(credentials: AuthRequestInterface): Observable<CurrentUserInterface> {
    return this.http.get(`${environment.apiUrl}/csrf-cookie`).pipe(
      switchMap((response) => {
        return this.http.post<CurrentUserInterface>(`${environment.apiUrl}/login`, credentials);
      })
    );
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/user`;
    return this.http.get<CurrentUserInterface>(url);
  }

  logout(): Observable<{}> {
    return this.http.post(`${environment.apiUrl}/logout`, {});
  }

}
