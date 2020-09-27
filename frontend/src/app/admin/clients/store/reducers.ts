import {ClientsStateInterface} from '../types/clientsState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {requestClientsAction, requestClientsFailureAction, requestClientsSuccessAction} from './actions/requestClients.actions';
import {hideClientModalAction, showClientModalAction} from './actions/modalControl.actions';
import {addClientAction, addClientFailureAction, addClientSuccessAction} from './actions/addClient.actions';

const initialState: ClientsStateInterface = {
  isLoading: false,
  isSubmitting: false,
  clients: [],
  validationErrors: null,
  isPopupVisible: false
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
  on(showClientModalAction, (state): ClientsStateInterface => ({
    ...state,
    isPopupVisible: true
  })),
  on(hideClientModalAction, (state): ClientsStateInterface => ({
    ...state,
    isPopupVisible: false
  })),
  on(addClientAction, (state): ClientsStateInterface => ({
    ...state,
    isSubmitting: true,
    validationErrors: null
  })),
  on(addClientSuccessAction, (state, actions): ClientsStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: null,
    clients: [...state.clients, actions.addedClient],
    isPopupVisible: false
  })),
  on(addClientFailureAction, (state, actions): ClientsStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: actions.errors
  })),
);

export function reducers(state: ClientsStateInterface, action: Action): any {
  return clientsReducer(state, action);
}
