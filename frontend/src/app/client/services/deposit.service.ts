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

  uploadFile(selectedFile: any): Observable<any>{
    const uploadData = new FormData();
    uploadData.append('upload_file', selectedFile, selectedFile.name);
    return this.http.post(`${environment.apiUrl}/upload`, uploadData, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
