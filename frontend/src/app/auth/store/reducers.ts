import {Action, createReducer, on} from '@ngrx/store';
import {loginAction, loginFailureAction, loginSuccessAction} from './actions/login.actions';
import {AuthStateInterface} from '../types/authState.interface';


const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null
};

const authReducer = createReducer(initialState,
  on(loginAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true,
    validationErrors: null
  })),
  on(loginSuccessAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    currentUser: action.currentUser
  })),
  on(loginFailureAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors
  }))
);

export function reducers(state: AuthStateInterface, action: Action): any {
  return authReducer(state, action);
}
