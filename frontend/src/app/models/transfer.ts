import {CurrencyType} from '../shared/types/currency.type';
import {TransferStatusesType} from '../shared/types/transferStatuses.type';

export class Transfer{
  id?: number;
  beneficiary_id: number;
  user_id: number;
  amount: number;
  payment_purposes: string;
  currency: CurrencyType;
  status: TransferStatusesType;
}
