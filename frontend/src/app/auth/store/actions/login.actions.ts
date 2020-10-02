import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {AuthRequestInterface} from '../../types/authRequest.interface';
import {CurrentUser} from '../../../models/currentUser';

export const loginActions = createAction(ActionTypes.LOGIN, props<{ request: AuthRequestInterface }>());
export const loginSuccessAction = createAction(ActionTypes.LOGIN_SUCCESS, props<{currentUser: CurrentUser}>());
export const loginFailureAction = createAction(ActionTypes.LOGIN_FAILURE, props<{errors: string}>());
