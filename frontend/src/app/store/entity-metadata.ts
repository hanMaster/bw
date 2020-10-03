import {EntityMetadataMap, EntityDataModuleConfig} from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Beneficiary: {},
  RussCompany: {},
  Deposit: {},
  Transfer: {},
  ForeignBank: {},
  ForeignAccount: {},
  RussBank: {},
  RussAccount: {}
};

const pluralNames = {
  Beneficiary: 'Beneficiaries',
  RussCompany: 'RussCompanies'
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
