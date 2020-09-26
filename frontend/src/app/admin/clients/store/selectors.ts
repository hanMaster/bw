import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../../shared/appState.interface';
import {ClientsStateInterface} from '../types/clientsState.interface';


export const clientsFeatureSelector = createFeatureSelector<AppStateInterface, ClientsStateInterface>('clients');

export const isLoadingSelector = createSelector(
  clientsFeatureSelector, (clientsState: ClientsStateInterface) => clientsState.isLoading);

export const validationErrorsSelector = createSelector(
  clientsFeatureSelector, (clientsState: ClientsStateInterface) => clientsState.validationErrors);

export const clientsSelector = createSelector(
  clientsFeatureSelector, (clientsState: ClientsStateInterface) => clientsState.clients);

export const isPopupVisibleSelector = createSelector(
  clientsFeatureSelector, (clientsState: ClientsStateInterface) => clientsState.isPopupVisible);
