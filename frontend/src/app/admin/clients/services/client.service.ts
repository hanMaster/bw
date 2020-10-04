import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {Client} from '../../../models/client';

@Injectable({ providedIn: 'root' })

export class ClientService extends EntityCollectionServiceBase<Client> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Client', serviceElementsFactory);
  }
}
