import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {RussCompanyInterface} from '../../../../../types/russCompany.interface';

export const editCompanyAction = createAction(ActionTypes.EDIT_COMPANY,
  props<{company: RussCompanyInterface}>()
);
export const editCompanySuccessAction = createAction(
  ActionTypes.EDIT_COMPANY_SUCCESS,
  props<{ updatedCompany: RussCompanyInterface }>()
);
export const editCompanyFailureAction = createAction(
  ActionTypes.EDIT_COMPANY_FAILURE,
  props<{ errors: any[] }>()
);
