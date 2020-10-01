import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {RussBank} from '../../../models/russBank';


@Injectable({ providedIn: 'root' })

export class RussBankService extends EntityCollectionServiceBase<RussBank> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('RussBank', serviceElementsFactory);
  }
}
