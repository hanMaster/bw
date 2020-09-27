import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {ClientInterface} from '../../../../types/client.interface';

export const addClientAction = createAction(ActionTypes.NEW_CLIENT,
  props<{client: ClientInterface}>()
  );
export const addClientSuccessAction = createAction(
  ActionTypes.NEW_CLIENT_SUCCESS,
  props<{ addedClient: ClientInterface }>()
);
export const addClientFailureAction = createAction(
  ActionTypes.NEW_CLIENT_FAILURE,
  props<{ errors: any[] }>()
);
