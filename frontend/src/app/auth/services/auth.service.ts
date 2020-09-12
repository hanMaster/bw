import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthRequestInterface} from '../types/authRequest.interface';

@Injectable()

export class AuthService {

  credentials: AuthRequestInterface = {
    username: 'hanMaster',
    password: '1qaz2wsx'
  };

  constructor(private http: HttpClient) {
  }

  login(): void {
    this.http.get(`${environment.apiUrl}/csrf-cookie`).subscribe(
      () => {

        this.http.post(`${environment.apiUrl}/login`, this.credentials).subscribe(
          (resp: any) => {
            console.log('resp', resp);
          }
        );
      }
    );
  }

  getUser(): void {
    this.http.get(`${environment.apiUrl}/user`).subscribe(
      (resp: any) => {
        console.log('resp', resp);
      }
    );
  }

}
