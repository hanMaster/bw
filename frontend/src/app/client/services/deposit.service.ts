import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {Deposit} from '../../models/deposit';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({ providedIn: 'root' })

export class DepositService extends EntityCollectionServiceBase<Deposit> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient
  ) {
    super('Deposit', serviceElementsFactory);
  }

  addDeposit(deposit: Deposit): Observable<Deposit>{
    const uploadData = new FormData();
    uploadData.append('upload_file', deposit.selectedFile, deposit.selectedFile.name);
    uploadData.append('admin_company_invoice_number', deposit.admin_company_invoice_number);
    uploadData.append('admin_company_invoice_date', deposit.admin_company_invoice_date);
    uploadData.append('payment_order_number', deposit.payment_order_number);
    uploadData.append('payment_order_date', deposit.payment_order_date);
    uploadData.append('admin_company_id', deposit.admin_company_id.toString());
    uploadData.append('user_company_id', deposit.user_company_id.toString());
    uploadData.append('currency', deposit.currency);
    uploadData.append('amount', deposit.amount.toString());
    uploadData.append('payment_purpose', deposit.payment_purpose);

    return this.http.post<Deposit>(`${environment.apiUrl}/deposit`, uploadData );
  }
}
