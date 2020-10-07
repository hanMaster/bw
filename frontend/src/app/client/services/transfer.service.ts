import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Transfer} from '../../models/transfer';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})

export class TransferService extends EntityCollectionServiceBase<Transfer> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient
  ) {
    super('Transfer', serviceElementsFactory);
  }

  addTransfer(transfer: Transfer): Observable<Transfer> {
    const uploadData = new FormData();
    uploadData.append('upload_file', transfer.selectedFile, transfer.selectedFile.name);
    uploadData.append('beneficiary_id', transfer.beneficiary_id.toString());
    uploadData.append('currency', transfer.currency);
    uploadData.append('amount', transfer.amount.toString());
    uploadData.append('payment_purpose', transfer.payment_purpose);

    return this.http.post<Transfer>(`${environment.apiUrl}/transfer`, uploadData);
  }
}
