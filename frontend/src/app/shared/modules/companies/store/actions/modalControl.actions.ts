import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';

export const showCompanyModalAction = createAction(
  ActionTypes.SHOW_COMPANY_MODAL,
  props<{edit: boolean}>()
);
export const hideCompanyModalAction = createAction(ActionTypes.HIDE_COMPANY_MODAL);
export const showViewCompanyModalAction = createAction(
  ActionTypes.SHOW_VIEW_COMPANY_MODAL,
  props<{id: number}>()
);
export const hideViewCompanyModalAction = createAction(ActionTypes.HIDE_VIEW_COMPANY_MODAL);
