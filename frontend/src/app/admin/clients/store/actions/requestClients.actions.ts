import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {ClientInterface} from '../../../../types/client.interface';

export const requestClientsAction = createAction(ActionTypes.REQUEST_CLIENTS);
export const requestClientsSuccessAction = createAction(
  ActionTypes.REQUEST_CLIENTS_SUCCESS,
  props<{ clients: ClientInterface[] }>()
);
export const requestClientsFailureAction = createAction(ActionTypes.REQUEST_CLIENTS_FAILURE);

export const showClientModalAction = createAction(ActionTypes.SHOW_CLIENT_MODAL);
export const hideClientModalAction = createAction(ActionTypes.HIDE_CLIENT_MODAL);
