import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Client} from '../../../models/client';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ClientsService {
  constructor(private http: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.apiUrl}/clients`);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${environment.apiUrl}/clients`, client);
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${environment.apiUrl}/clients`, client);
  }
}
