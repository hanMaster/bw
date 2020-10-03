import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {RussCompany} from '../../../../models/russCompany';



@Injectable({ providedIn: 'root' })

export class RussCompanyService extends EntityCollectionServiceBase<RussCompany> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('RussCompany', serviceElementsFactory);
  }
}
