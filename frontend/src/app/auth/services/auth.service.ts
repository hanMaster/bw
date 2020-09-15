import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthRequestInterface} from '../types/authRequest.interface';
import {CurrentUserInterface} from '../../types/currentUser.interface';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable()

export class AuthService {

  // credentials: AuthRequestInterface = {
  //   username: 'hanMaster',
  //   password: '1qaz2wsx'
  // };

  constructor(private http: HttpClient) {
  }

  login(credentials: AuthRequestInterface): Observable<CurrentUserInterface> {
    return this.http.get(`${environment.apiUrl}/csrf-cookie`).pipe(
      switchMap(() => {
        return this.http.post<CurrentUserInterface>(`${environment.apiUrl}/login`, credentials);
      })
  });
}

getUser()
:
void {
  this.http.get(`${environment.apiUrl}/beneficiary`).subscribe(
    (resp: any) => {
      console.log('resp', resp);
    }
  );
}

logout()
:
void {
  this.http.post(`${environment.apiUrl}/logout`, {}).subscribe(
    (resp: any) => {
      console.log('resp', resp);
    }
  );
}

}
