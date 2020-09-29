import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {CurrentUserInterface} from '../../../types/currentUser.interface';

export const getCurrentUserActions = createAction(
  ActionTypes.GET_CURRENT_USER
);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
);