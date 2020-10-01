import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {RussCompany} from '../../../../../models/russCompany';

export const editCompanyAction = createAction(ActionTypes.EDIT_COMPANY,
  props<{company: RussCompany}>()
);
export const editCompanySuccessAction = createAction(
  ActionTypes.EDIT_COMPANY_SUCCESS,
  props<{ updatedCompany: RussCompany }>()
);
export const editCompanyFailureAction = createAction(
  ActionTypes.EDIT_COMPANY_FAILURE,
  props<{ errors: any[] }>()
);
