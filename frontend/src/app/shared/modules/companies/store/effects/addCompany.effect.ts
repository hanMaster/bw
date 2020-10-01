import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {
  addCompanyAction,
  addCompanyFailureAction,
  addCompanySuccessAction
} from '../actions/addCompanies.actions';
import {RussCompany} from '../../../../../models/russCompany';
import {CompaniesService} from '../../services/companies.service';
import {FormControlService} from '../../../../services/formControl.service';

@Injectable()
export class AddCompanyEffect {
  constructor(
    private actions$: Actions,
    private companiesService: CompaniesService,
    private formControlService: FormControlService
  ) {
  }

  addCompany$ = createEffect(() => this.actions$.pipe(
    ofType(addCompanyAction),
    switchMap(({company}) => {
      return this.companiesService.addCompany(company)
        .pipe(
          map((addedCompany: RussCompany) => {
            this.formControlService.clearForm();
            return addCompanySuccessAction({addedCompany});
          }),
          catchError((err) => {
            const errors: any[] =
              Object.keys(err.error.errors).map(item => ([err.error.errors[item][0]]));
            return of(addCompanyFailureAction({errors}));
          })
        );
    })
    )
  );
}
