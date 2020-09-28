export enum ActionTypes {
  SHOW_CLIENT_MODAL = '[Clients] Open modal',
  HIDE_CLIENT_MODAL = '[Clients] Hide modal',
  SHOW_VIEW_CLIENT_MODAL = '[Clients] Open view only modal',
  HIDE_VIEW_CLIENT_MODAL = '[Clients] Hide view only modal',

  REQUEST_CLIENTS = '[Clients] Request clients list',
  REQUEST_CLIENTS_SUCCESS = '[Clients] Request clients list success',
  REQUEST_CLIENTS_FAILURE = '[Clients] Request clients list failure',

  NEW_CLIENT = '[Clients] Creating new client',
  NEW_CLIENT_SUCCESS = '[Clients] Creating new client success',
  NEW_CLIENT_FAILURE = '[Clients] Creating new client failure',

  EDIT_CLIENT = '[Clients] Edit client',
  EDIT_CLIENT_SUCCESS = '[Clients] Edit client success',
  EDIT_CLIENT_FAILURE = '[Clients] Edit client failure'
}
