import {Component, HostBinding, OnInit} from '@angular/core';
import {TransferService} from '../../../client/services/transfer.service';
import {Observable} from 'rxjs';
import {Transfer} from '../../../models/transfer';

@Component({
  selector: 'app-admin-archived-transfers-page',
  templateUrl: './adminTransfersArchivedPage.component.html',
  styleUrls: ['./adminTransfersArchivedPage.component.scss']
})
export class AdminTransfersArchivedPageComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';
  transfers$: Observable<Transfer[]>;

  constructor(private transferService: TransferService) {
    this.transfers$ = this.transferService.getArchivedTransfers();
  }

  ngOnInit(): void {

  }

}
