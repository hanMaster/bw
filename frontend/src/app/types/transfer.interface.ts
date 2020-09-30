import {CurrencyType} from './currency.type';

export interface TransferInterface{
  id?: number;
  beneficiary_id: number;
  user_id: number;
  amount: number;
  payment_purposes: string;
  currency: CurrencyType;
}
