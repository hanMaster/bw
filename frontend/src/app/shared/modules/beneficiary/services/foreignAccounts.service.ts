import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {ForeignAccount} from '../../../../models/foreignAccount';

@Injectable({ providedIn: 'root' })

export class ForeignAccountService extends EntityCollectionServiceBase<ForeignAccount> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('ForeignAccount', serviceElementsFactory);
  }
}
