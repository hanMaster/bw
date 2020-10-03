import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {RussAccount} from '../../../../models/russAccount';




@Injectable({ providedIn: 'root' })

export class RussAccountService extends EntityCollectionServiceBase<RussAccount> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('RussAccount', serviceElementsFactory);
  }
}
