import {Component, HostBinding, OnInit} from '@angular/core';
import {WindowScrolling} from '../../../shared/services/windowScrolliing.service';
import {TransferService} from '../../services/transfer.service';
import {Observable} from 'rxjs';
import {Transfer} from '../../../models/transfer';
import {first, mergeMap, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-transfer-page',
  templateUrl: './transferCompletedPage.component.html'
})
export class TransferCompletedPageComponent implements OnInit {
  @HostBinding('class') classList = 'main-content';

  isPopupVisible = false;
  transfers: Transfer[];

  constructor(
    private scrollService: WindowScrolling,
    private transferService: TransferService
  ) {
  }

  ngOnInit(): void {
    this.transferService.getClientTransfers().pipe(
      first(),
      mergeMap((transfers, _) => {
        return transfers.filter(tr => (tr.status === 'completed'));
      }),
      toArray()
    ).subscribe(
      transfers => (this.transfers = transfers)
    );
  }

  hideModal(): void {
    this.isPopupVisible = false;
    this.scrollService.enable();
    this.transferService.getAll();
  }

  newTransfer(): void {
    this.isPopupVisible = true;
    this.scrollService.disable();
  }
}
