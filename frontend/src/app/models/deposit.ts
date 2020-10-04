import {CurrencyType} from '../shared/types/currency.type';
import {DepositStatusesType} from '../shared/types/depositStatuses.type';

export class Deposit{
  id?: number;
  admin_company_invoice_number: string;
  admin_company_invoice_date: string;
  payment_order_number: string;
  payment_order_date: string;
  admin_company_bank_id: number;
  admin_company_id: number;
  user_company_id: number;
  user_id: number;
  currency: CurrencyType;
  status: DepositStatusesType;
  amount: number;
  payment_purpose: string;
  payment_order_pdf: string;
  created_at?: string;
  updated_at?: string;
}
