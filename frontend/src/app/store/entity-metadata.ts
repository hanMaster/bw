import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  RussBank: {},
  Beneficiary: {}
};

const pluralNames = { Beneficiary: 'Beneficiaries' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
