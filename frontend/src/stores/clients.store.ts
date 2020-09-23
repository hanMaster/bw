import {Injectable} from '@angular/core';
import {action, observable} from 'mobx-angular';
import {take} from 'rxjs/operators';

import {ClientInterface} from '../app/types/client.interface';
import {ClientsService} from '../app/admin/clients/services/clients.service';

@Injectable()
export class ClientsStore {
  @observable clients: ClientInterface[] = [];

  constructor(private clientsService: ClientsService) {
  }

  @action getClients(): void {
    if (!this.clients.length) {
      this.clientsService.getClients().pipe(take(1)).subscribe(
        (clients: ClientInterface[]) => {
          this.clients = clients;
        }
      );
    }
  }
}
