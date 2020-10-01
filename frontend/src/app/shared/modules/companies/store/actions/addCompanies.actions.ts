import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {RussCompany} from '../../../../../models/russCompany';

export const addCompanyAction = createAction(ActionTypes.NEW_COMPANY,
  props<{company: RussCompany}>()
  );
export const addCompanySuccessAction = createAction(
  ActionTypes.NEW_COMPANY_SUCCESS,
  props<{ addedCompany: RussCompany }>()
);
export const addCompanyFailureAction = createAction(
  ActionTypes.NEW_COMPANY_FAILURE,
  props<{ errors: any[] }>()
);
