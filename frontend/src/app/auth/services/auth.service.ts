import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthRequestInterface} from '../types/authRequest.interface';

@Injectable()

export class AuthService {

  credentials: AuthRequestInterface = {
    email: 'w54661c@gmail.com',
    password: '1Qaz2Wsx'
  };

  constructor(private http: HttpClient) {
  }

  login(): void {
    const csrfUrl = `${environment.apiUrl}/csrf-cookie`;
    const loginUrl = `${environment.apiUrl}/login`;
    this.http.get(csrfUrl, {withCredentials: true}).subscribe(
      () => {
        this.http.post(loginUrl, this.credentials, {withCredentials: true}).subscribe(
          (resp: any) => {
            console.log('resp', resp);
          }
        );
      }
    );
  }
}
