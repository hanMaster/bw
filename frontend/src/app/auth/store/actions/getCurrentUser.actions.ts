import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {CurrentUser} from '../../../models/currentUser';

export const getCurrentUserActions = createAction(
  ActionTypes.GET_CURRENT_USER
);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUser }>()
);

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
);
