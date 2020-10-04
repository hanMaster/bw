import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {Deposit} from '../../models/deposit';

@Injectable({ providedIn: 'root' })

export class DepositService extends EntityCollectionServiceBase<Deposit> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Deposit', serviceElementsFactory);
  }
}
