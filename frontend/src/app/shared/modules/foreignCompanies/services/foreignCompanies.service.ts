import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {ForeignCompany} from '../../../../models/foreignCompany';


@Injectable({ providedIn: 'root' })

export class ForeignCompanyService extends EntityCollectionServiceBase<ForeignCompany> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('ForeignCompany', serviceElementsFactory);
  }
}
