import {Action, createReducer, on} from '@ngrx/store';
import {CompaniesStateInterface} from '../types/companiesState.interface';
import {
  requestCompaniesAction,
  requestCompaniesFailureAction,
  requestCompaniesSuccessAction
} from './actions/requestCompanies.actions';
import {
  hideCompanyModalAction, hideViewCompanyModalAction,
  showCompanyModalAction,
  showViewCompanyModalAction
} from './actions/modalControl.actions';
import {addCompanyAction, addCompanyFailureAction, addCompanySuccessAction} from './actions/addCompanies.actions';
import {editCompanyAction, editCompanyFailureAction, editCompanySuccessAction} from './actions/updateCompanies.actions';

const initialState: CompaniesStateInterface = {
  isLoading: false,
  isSubmitting: false,
  companies: [],
  validationErrors: null,
  isPopupVisible: false,
  isShowPopupVisible: false,
  company: null,
  editMode: false
};
const companiesReducer = createReducer(initialState,
  on(requestCompaniesAction, (state): CompaniesStateInterface => ({
    ...state,
    isLoading: true,
    validationErrors: null
  })),
  on(requestCompaniesSuccessAction, (state, actions): CompaniesStateInterface => ({
    ...state,
    isLoading: false,
    validationErrors: null,
    companies: actions.companies
  })),
  on(requestCompaniesFailureAction, (state): CompaniesStateInterface => ({
    ...state,
    isLoading: false,
    validationErrors: null
  })),
  on(showCompanyModalAction, (state, actions): CompaniesStateInterface => {
    return {
      ...state,
      isPopupVisible: true,
      isShowPopupVisible: false,
      editMode: actions.edit
    };
  }),
  on(hideCompanyModalAction, (state): CompaniesStateInterface => ({
    ...state,
    isPopupVisible: false
  })),
  on(showViewCompanyModalAction, (state, actions): CompaniesStateInterface => {
      const singleCompany = state.companies.find(company => company.id === actions.id);
      return {
        ...state,
        isShowPopupVisible: true,
        company: singleCompany
      };
    }
  ),
  on(hideViewCompanyModalAction, (state): CompaniesStateInterface => ({
    ...state,
    isShowPopupVisible: false
  })),
  on(addCompanyAction, (state): CompaniesStateInterface => ({
    ...state,
    isSubmitting: true,
    validationErrors: null
  })),
  on(addCompanySuccessAction, (state, actions): CompaniesStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: null,
    companies: [...state.companies, actions.addedCompany],
    isPopupVisible: false
  })),
  on(addCompanyFailureAction, (state, actions): CompaniesStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: actions.errors
  })),
  on(editCompanyAction, (state): CompaniesStateInterface => ({
    ...state,
    isSubmitting: true,
    validationErrors: null
  })),
  on(editCompanySuccessAction, (state, actions): CompaniesStateInterface => {
    const newCompanies = state.companies.map(client => {
      if (client.id === actions.updatedCompany.id) {
        return actions.updatedCompany;
      } else {
        return client;
      }
    });
    return {
      ...state,
      isSubmitting: false,
      validationErrors: null,
      companies: [...newCompanies],
      isPopupVisible: false
    };
  }),
  on(editCompanyFailureAction, (state, actions): CompaniesStateInterface => ({
    ...state,
    isSubmitting: false,
    validationErrors: actions.errors
  })),
  )
;

export function reducers(state: CompaniesStateInterface, action: Action): any {
  return companiesReducer(state, action);
}
