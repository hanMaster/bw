import {CurrencyType} from './currency.type';

export interface DepositInterface{
  id?: number;
  admin_company_invoice_number: string;
  admin_company_invoice_date: string;
  admin_company_bank_id: number;
  admin_company_id: number;
  user_company_id: number;
  user_id: number;
  currency: CurrencyType;
  amount: number;
  payment_purpose: string;
  payment_order_pdf: string;
  created_at?: string;
  updated_at?: string;
}
