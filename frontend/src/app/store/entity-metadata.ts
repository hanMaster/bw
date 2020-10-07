import {EntityMetadataMap, EntityDataModuleConfig} from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Beneficiary: {},
  RussCompany: {},
  ForeignCompany: {},
  Deposit: {},
  Transfer: {},
  Client: {},
  UserCompanies: {},
  UserForCompanies: {}
};

const pluralNames = {
  Beneficiary: 'Beneficiaries',
  RussCompany: 'RussCompanies',
  ForeignCompany: 'ForeignCompanies',
  Client: 'Clients'
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
