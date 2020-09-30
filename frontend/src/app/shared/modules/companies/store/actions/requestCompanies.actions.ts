import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {RussCompanyInterface} from '../../../../../types/russCompany.interface';

export const requestCompaniesAction = createAction(
  ActionTypes.REQUEST_COMPANIES
);
export const requestCompaniesSuccessAction = createAction(
  ActionTypes.REQUEST_COMPANIES_SUCCESS,
  props<{ companies: RussCompanyInterface[] }>()
);
export const requestCompaniesFailureAction = createAction(ActionTypes.REQUEST_COMPANIES_FAILURE);
