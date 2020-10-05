export class Beneficiary{
  id?: number;
  beneficiary_alias: string;
  beneficiary_name: string;
  address_line1: string;
  address_line2?: string;
  address_line3?: string;
  beneficiary_email_www: string;
  contact_email: string;
  user_id: number;
  bank_name: string;
  bank_address: string;
  swift_code: string;
  account_number: string;
  created_at?: string;
  updated_at?: string;
}
