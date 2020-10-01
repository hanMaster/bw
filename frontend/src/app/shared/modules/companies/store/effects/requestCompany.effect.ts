import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {CompaniesService} from '../../services/companies.service';
import {
  requestCompaniesAction,
  requestCompaniesFailureAction,
  requestCompaniesSuccessAction
} from '../actions/requestCompanies.actions';
import {RussCompany} from '../../../../../models/russCompany';


@Injectable()
export class RequestCompanyEffect {
  constructor(
    private actions$: Actions,
    private companiesService: CompaniesService
  ) {
  }

  requestCompanies$ = createEffect(() => this.actions$.pipe(
    ofType(requestCompaniesAction),
    switchMap(() => {
      return this.companiesService.getUserCompanies()
        .pipe(
          map((companies: RussCompany[]) => {
            return requestCompaniesSuccessAction({companies});
          }),
          catchError(() => {
            return of(requestCompaniesFailureAction());
          })
        );
    })
    )
  );
}
