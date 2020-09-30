import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {
  editCompanyAction,
  editCompanyFailureAction,
  editCompanySuccessAction
} from '../actions/updateCompanies.actions';
import {RussCompanyInterface} from '../../../../../types/russCompany.interface';
import {CompaniesService} from '../../services/companies.service';
import {FormControlService} from '../../../../services/formControl.service';

@Injectable()
export class UpdateCompanyEffect {
  constructor(
    private actions$: Actions,
    private companiesService: CompaniesService,
    private formControlService: FormControlService
  ) {
  }

  updateCompany$ = createEffect(() => this.actions$.pipe(
    ofType(editCompanyAction),
    switchMap(({company}) => {
      return this.companiesService.updateCompany(company)
        .pipe(
          map((updatedCompany: RussCompanyInterface) => {
            this.formControlService.clearForm();
            return editCompanySuccessAction({updatedCompany});
          }),
          catchError((err) => {
            const errors: any[] =
              Object.keys(err.error.errors).map(item => ([err.error.errors[item][0]]));
            return of(editCompanyFailureAction({errors}));
          })
        );
    })
    )
  );
}
