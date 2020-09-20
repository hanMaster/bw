import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ClientInterface} from '../../../types/client.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ClientsService{
  constructor(private http: HttpClient) {
  }
  getClients(): Observable<ClientInterface[]>{
    return this.http.get<ClientInterface[]>(`${environment.apiUrl}/clients`);
  }
}
