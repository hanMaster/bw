import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {RussCompanyInterface} from '../../../../../types/russCompany.interface';

export const addCompanyAction = createAction(ActionTypes.NEW_COMPANY,
  props<{company: RussCompanyInterface}>()
  );
export const addCompanySuccessAction = createAction(
  ActionTypes.NEW_COMPANY_SUCCESS,
  props<{ addedCompany: RussCompanyInterface }>()
);
export const addCompanyFailureAction = createAction(
  ActionTypes.NEW_COMPANY_FAILURE,
  props<{ errors: any[] }>()
);
