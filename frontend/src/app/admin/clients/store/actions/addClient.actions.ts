import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {Client} from '../../../../models/client';

export const addClientAction = createAction(ActionTypes.NEW_CLIENT,
  props<{client: Client}>()
  );
export const addClientSuccessAction = createAction(
  ActionTypes.NEW_CLIENT_SUCCESS,
  props<{ addedClient: Client }>()
);
export const addClientFailureAction = createAction(
  ActionTypes.NEW_CLIENT_FAILURE,
  props<{ errors: any[] }>()
);
