import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {ClientInterface} from '../../../../types/client.interface';

export const requestClientsAction = createAction(ActionTypes.REQUEST_CLIENTS);
export const requestClientsSuccessAction = createAction(
  ActionTypes.REQUEST_CLIENTS_SUCCESS,
  props<{ clients: ClientInterface[] }>()
);
export const requestClientsFailureAction = createAction(ActionTypes.REQUEST_CLIENTS_FAILURE);
