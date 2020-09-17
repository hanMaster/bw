import {Action, createReducer, on} from '@ngrx/store';
import {loginAction, loginFailureAction, loginSuccessAction} from './actions/login.actions';
import {AuthStateInterface} from '../types/authState.interface';
import {logoutAction, logoutFailureAction, logoutSuccessAction} from './actions/logout.actions';
import {getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction} from './actions/getCurrentUser.action';


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
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(loginFailureAction, (state, action): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors
  })),
  on(logoutAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true,
    validationErrors: null
  })),
  on(logoutSuccessAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: false,
    currentUser: null
  })),
  on(logoutFailureAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: false
  })),
  on(getCurrentUserAction, (state): AuthStateInterface => ({
    ...state,
    isLoading: true,
    validationErrors: null
  })),
  on(getCurrentUserSuccessAction, (state, action): AuthStateInterface => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(getCurrentUserFailureAction, (state, action): AuthStateInterface => ({
    ...state,
    isLoading: false,
    isLoggedIn: false,
    currentUser: null
  })),
);

export function reducers(state: AuthStateInterface, action: Action): any {
  return authReducer(state, action);
}
