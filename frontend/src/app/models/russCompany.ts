import {RussAccount} from './russAccount';
import {OrganizationFormsType} from '../shared/types/organizationForms.type';

export class RussCompany {
  id?: number;
  user_id: number;
  company_name: string;
  organization_form: OrganizationFormsType;
  law_address: string;
  inn: string;
  kpp: string;
  reg_number: string;
  accounts: RussAccount[];
  created_at?: string;
  updated_at?: string;
}
