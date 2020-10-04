import {EntityMetadataMap, EntityDataModuleConfig} from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Beneficiary: {},
  RussCompany: {},
  Deposit: {},
  Transfer: {},
  ForeignBank: {},
  ForeignAccount: {},
  RussBank: {},
  RussAccount: {},
  Client: {},
  UserCompanies: {}
};

const pluralNames = {
  Beneficiary: 'Beneficiaries',
  RussCompany: 'RussCompanies',
  Client: 'Clients'
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
