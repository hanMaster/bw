import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {Client} from '../../../../models/client';

export const editClientAction = createAction(ActionTypes.EDIT_CLIENT,
  props<{client: Client}>()
);
export const editClientSuccessAction = createAction(
  ActionTypes.EDIT_CLIENT_SUCCESS,
  props<{ updatedClient: Client }>()
);
export const editClientFailureAction = createAction(
  ActionTypes.EDIT_CLIENT_FAILURE,
  props<{ errors: any[] }>()
);
