import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {RussCompany} from '../../../../../models/russCompany';

export const requestCompaniesAction = createAction(
  ActionTypes.REQUEST_COMPANIES
);
export const requestCompaniesSuccessAction = createAction(
  ActionTypes.REQUEST_COMPANIES_SUCCESS,
  props<{ companies: RussCompany[] }>()
);
export const requestCompaniesFailureAction = createAction(ActionTypes.REQUEST_COMPANIES_FAILURE);
