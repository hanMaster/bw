import {ForeignAccount} from './foreignAccount';

export class Beneficiary{
  id?: number;
  beneficiary_name: string;
  address_line1: string;
  address_line2?: string;
  address_line3?: string;
  beneficiary_email_www: string;
  contact_email: string;
  user_id: number;
  accounts: ForeignAccount[];
  created_at?: string;
  updated_at?: string;
}
