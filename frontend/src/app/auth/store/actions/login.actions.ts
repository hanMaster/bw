import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {AuthRequestInterface} from '../../types/authRequest.interface';
import {CurrentUserInterface} from '../../../types/currentUser.interface';
import {BackendErrorsInterface} from '../../../types/backendErrors.interface';

export const loginActions = createAction(ActionTypes.LOGIN, props<{ request: AuthRequestInterface }>());
export const loginSuccessAction = createAction(ActionTypes.LOGIN_SUCCESS, props<{currentUser: CurrentUserInterface}>());
export const loginFailureAction = createAction(ActionTypes.LOGIN_FAILURE, props<{errors: BackendErrorsInterface}>());
