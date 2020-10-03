import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {ForeignBank} from '../../../models/foreignBank';



@Injectable({ providedIn: 'root' })

export class ForeignBankService extends EntityCollectionServiceBase<ForeignBank> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('ForeignBank', serviceElementsFactory);
  }
}
