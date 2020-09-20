import {ClientsStateInterface} from '../types/clientsState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {requestClientsAction, requestClientsFailureAction, requestClientsSuccessAction} from './actions/requestClients.actions';

const initialState: ClientsStateInterface = {
  isLoading: false,
  isSubmitting: false,
  clients: [],
  validationErrors: null
};
const clientsReducer = createReducer(initialState,
  on(requestClientsAction, (state): ClientsStateInterface => ({
    ...state,
    isLoading: true,
    validationErrors: null
  })),
  on(requestClientsSuccessAction, (state, actions): ClientsStateInterface => ({
    ...state,
    isLoading: false,
    validationErrors: null,
    clients: actions.clients
  })),
  on(requestClientsFailureAction, (state): ClientsStateInterface => ({
    ...state,
    isLoading: false,
    validationErrors: null
  })),
);

export function reducers(state: ClientsStateInterface, action: Action): any {
  return clientsReducer(state, action);
}
