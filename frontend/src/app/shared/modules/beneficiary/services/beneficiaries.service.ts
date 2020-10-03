import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {Beneficiary} from '../../../../models/beneficiary';



@Injectable({ providedIn: 'root' })

export class BeneficiaryService extends EntityCollectionServiceBase<Beneficiary> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Beneficiary', serviceElementsFactory);
  }
}
