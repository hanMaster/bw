import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';

import {UserCompanies} from '../../../models/userCompanies';

@Injectable({ providedIn: 'root' })

export class UserCompaniesService extends EntityCollectionServiceBase<UserCompanies> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('UserCompanies', serviceElementsFactory);
  }
}
