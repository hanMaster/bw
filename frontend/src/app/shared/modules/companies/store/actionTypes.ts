export enum ActionTypes {
  SHOW_COMPANY_MODAL = '[Companies] Open modal',
  HIDE_COMPANY_MODAL = '[Companies] Hide modal',
  SHOW_VIEW_COMPANY_MODAL = '[Companies] Open view only modal',
  HIDE_VIEW_COMPANY_MODAL = '[Companies] Hide view only modal',

  REQUEST_COMPANIES = '[Companies] Request companies list',
  REQUEST_COMPANIES_SUCCESS = '[Companies] Request companies list success',
  REQUEST_COMPANIES_FAILURE = '[Companies] Request companies list failure',

  NEW_COMPANY = '[Companies] Creating new company',
  NEW_COMPANY_SUCCESS = '[Companies] Creating new company success',
  NEW_COMPANY_FAILURE = '[Companies] Creating new company failure',

  EDIT_COMPANY = '[Companies] Edit company',
  EDIT_COMPANY_SUCCESS = '[Companies] Edit company success',
  EDIT_COMPANY_FAILURE = '[Companies] Edit company failure'
}
