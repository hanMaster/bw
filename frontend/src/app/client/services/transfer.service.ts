import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {Transfer} from '../../models/transfer';

@Injectable({ providedIn: 'root' })

export class TransferService extends EntityCollectionServiceBase<Transfer> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Transfer', serviceElementsFactory);
  }
}
