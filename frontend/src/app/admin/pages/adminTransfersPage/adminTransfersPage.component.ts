import {Component, HostBinding, OnInit} from '@angular/core';
import {TransferService} from '../../../client/services/transfer.service';
import {Observable} from 'rxjs';
import {Transfer} from '../../../models/transfer';

@Component({
  selector: 'app-admin-transfers-page',
  templateUrl: './adminTransfersPage.component.html',
  styleUrls: ['./adminTransfersPage.component.scss']
})
export class AdminTransfersPageComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';
  transfers$: Observable<Transfer[]>;

  constructor(private transferService: TransferService) {
    this.transfers$ = this.transferService.getActiveTransfers();
  }

  ngOnInit(): void {

  }

}
