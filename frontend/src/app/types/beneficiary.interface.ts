export interface BeneficiaryInterface{
  id?: number;
  beneficiary_name: string;
  address_line1: string;
  address_line2?: string;
  address_line3?: string;
  beneficiary_email_www: string;
  contact_email: string;
  user_id: number;
  created_at?: string;
  updated_at?: string;
}
