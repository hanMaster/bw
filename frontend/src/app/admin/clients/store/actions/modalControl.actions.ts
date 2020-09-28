import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';

export const showClientModalAction = createAction(
  ActionTypes.SHOW_CLIENT_MODAL,
  props<{edit: boolean}>()
);
export const hideClientModalAction = createAction(ActionTypes.HIDE_CLIENT_MODAL);
export const showViewClientModalAction = createAction(
  ActionTypes.SHOW_VIEW_CLIENT_MODAL,
  props<{id: number}>()
);
export const hideViewClientModalAction = createAction(ActionTypes.HIDE_VIEW_CLIENT_MODAL);
