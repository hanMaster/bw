import {ClientsStateInterface} from '../types/clientsState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {
  requestClientsAction,
  requestClientsFailureAction,
  requestClientsSuccessAction
} from './actions/requestClients.actions';
import {
  hideClientModalAction,
  hideViewClientModalAction,
  showClientModalAction,
  showViewClientModalAction
} from './actions/modalControl.actions';
import {addClientAction, addClientFailureAction, addClientSuccessAction} from './actions/addClient.actions';
import {editClientAction, editClientFailureAction, editClientSuccessAction} from './actions/updateClient.actions';

const initialState: ClientsStateInterface = {
  isLoading: false,
  isSubmitting: false,
  clients: [],
  validationErrors: null,
  isPopupVisible: false,
  isShowPopupVisible: false,
  client: null,
  editMode: false
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
  on(showClientModalAction, (state, actions): ClientsStateInterface => {
    return {
      ...state,
      isPopupVisible: true,
      isShowPopupVisible: false,
      editMode: actions.edit
    };
  }),
  on(hideClientModalAction, (state): ClientsStateInterface => ({
    ...state,
    isPopupVisible: false
  })),
  on(showViewClientModalAction, (state, actions): ClientsStateInterface => {
      const singleClient = state.clients.find(client => client.id === actions.id);
      return {
        ...state,
        isShowPopupVisible: true,
        client: singleClient
      };
    }
  ),
  on(hideViewClientModalAction, (state): ClientsStateInterface => ({
    ...state,
    isShowPopupVisible: false
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
  on(editClientAction, (state): ClientsStateInterface => ({
    ...state,
    isSubmitting: true,
    validationErrors: null
  })),
  on(editClientSuccessAction, (state, actions): ClientsStateInterface => {
    const newClients = state.clients.map(client => {
      if (client.id === actions.updatedClient.id) {
        return actions.updatedClient;
      } else {
        return client;
      }
    });
    return {
      ...state,
      isSubmitting: false,
      validationErrors: null,
      clients: [...newClients],
      isPopupVisible: false
    };
  }),
  on(editClientFailureAction, (state, actions): ClientsStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: actions.errors
  })),
  )
;

export function reducers(state: ClientsStateInterface, action: Action): any {
  return clientsReducer(state, action);
}
