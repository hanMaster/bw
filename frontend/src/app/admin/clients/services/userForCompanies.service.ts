import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';

import {UserForCompanies} from '../../../models/userForCompanies';

@Injectable({ providedIn: 'root' })

export class UserForCompaniesService extends EntityCollectionServiceBase<UserForCompanies> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('UserForCompanies', serviceElementsFactory);
  }
}
