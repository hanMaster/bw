import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../../appState.interface';
import {CompaniesStateInterface} from '../types/companiesState.interface';


export const companiesFeatureSelector = createFeatureSelector<AppStateInterface, CompaniesStateInterface>('companies');

export const isLoadingSelector = createSelector(
  companiesFeatureSelector, (companiesState: CompaniesStateInterface) => companiesState.isLoading);

export const validationErrorsSelector = createSelector(
  companiesFeatureSelector, (companiesState: CompaniesStateInterface) => companiesState.validationErrors);

export const companiesSelector = createSelector(
  companiesFeatureSelector, (companiesState: CompaniesStateInterface) => companiesState.companies);

export const companySelector = createSelector(
  companiesFeatureSelector, (companiesState: CompaniesStateInterface) => companiesState.company);

export const isPopupVisibleSelector = createSelector(
  companiesFeatureSelector, (companiesState: CompaniesStateInterface) => companiesState.isPopupVisible);

export const isShowPopupVisibleSelector = createSelector(
  companiesFeatureSelector, (companiesState: CompaniesStateInterface) => companiesState.isShowPopupVisible);

export const editModeSelector = createSelector(
  companiesFeatureSelector, (companiesState: CompaniesStateInterface) => companiesState.editMode);
