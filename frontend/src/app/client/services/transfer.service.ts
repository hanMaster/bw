import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Transfer} from '../../models/transfer';
import {environment} from '../../../environments/environment';
import {shareReplay} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class TransferService extends EntityCollectionServiceBase<Transfer> {

  activeTransfers$: Observable<Transfer[]>;
  archivedTransfers$: Observable<Transfer[]>;
  clientTransfers$: Observable<Transfer[]>;

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

  getActiveTransfers(): Observable<Transfer[]> {
    if (!this.activeTransfers$) {
      this.activeTransfers$ = this.requestActiveTransfers().pipe(
        shareReplay(1)
      );
    }
    return this.activeTransfers$;
  }

  requestActiveTransfers(): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(`${environment.apiUrl}/active-transfers`);
  }

  getArchivedTransfers(): Observable<Transfer[]> {
    if (!this.archivedTransfers$) {
      this.archivedTransfers$ = this.requestArchivedTransfers().pipe(
        shareReplay(1)
      );
    }
    return this.archivedTransfers$;
  }

  requestArchivedTransfers(): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(`${environment.apiUrl}/archived-transfers`);
  }

  getClientTransfers(): Observable<Transfer[]> {
    if (!this.clientTransfers$) {
      this.clientTransfers$ = this.requestClientTransfers().pipe(
        shareReplay(1)
      );
    }
    return this.clientTransfers$;
  }

  requestClientTransfers(): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(`${environment.apiUrl}/transfers`);
  }


}
