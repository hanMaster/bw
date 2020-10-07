import {CurrencyType} from '../shared/types/currency.type';
import {TransferStatusesType} from '../shared/types/transferStatuses.type';

export class Transfer{
  id?: number;
  beneficiary_id: number;
  user_id: number;
  amount: number;
  payment_purpose: string;
  currency: CurrencyType;
  status: TransferStatusesType;
  invoice_pdf: string;
  selectedFile: any;
  beneficiary_name?: string;
  bank_name?: string;
  created_at?: string;
  updated_at?: string;
}
