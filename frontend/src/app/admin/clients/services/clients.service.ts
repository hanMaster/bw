import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ClientInterface} from '../../../types/client.interface';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ClientsService {
  constructor(private http: HttpClient) {
  }

  getClients(): Observable<ClientInterface[]> {
    return this.http.get<ClientInterface[]>(`${environment.apiUrl}/clients`);
  }

  addClient(client: ClientInterface): Observable<ClientInterface> {
    return this.http.post<ClientInterface>(`${environment.apiUrl}/clients`, client);
  }

  updateClient(client: ClientInterface): Observable<ClientInterface> {
    return this.http.put<ClientInterface>(`${environment.apiUrl}/clients`, client);
  }
}
