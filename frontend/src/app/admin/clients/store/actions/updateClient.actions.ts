import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {ClientInterface} from '../../../../types/client.interface';

export const editClientAction = createAction(ActionTypes.EDIT_CLIENT,
  props<{client: ClientInterface}>()
);
export const editClientSuccessAction = createAction(
  ActionTypes.EDIT_CLIENT_SUCCESS,
  props<{ updatedClient: ClientInterface }>()
);
export const editClientFailureAction = createAction(
  ActionTypes.EDIT_CLIENT_FAILURE,
  props<{ errors: any[] }>()
);
