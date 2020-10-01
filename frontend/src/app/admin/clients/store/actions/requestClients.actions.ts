import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {Client} from '../../../../models/client';

export const requestClientsAction = createAction(ActionTypes.REQUEST_CLIENTS);
export const requestClientsSuccessAction = createAction(
  ActionTypes.REQUEST_CLIENTS_SUCCESS,
  props<{ clients: Client[] }>()
);
export const requestClientsFailureAction = createAction(ActionTypes.REQUEST_CLIENTS_FAILURE);
