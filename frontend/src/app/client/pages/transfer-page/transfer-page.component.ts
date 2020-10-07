import {Component, HostBinding, OnInit} from '@angular/core';
import {WindowScrolling} from '../../../shared/services/windowScrolliing.service';
import {TransferService} from '../../services/transfer.service';
import {Observable} from 'rxjs';
import {Transfer} from '../../../models/transfer';

@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.scss']
})
export class TransferPageComponent implements OnInit {
  @HostBinding('class') classList = 'main-content';

  isPopupVisible = false;
  transfers$: Observable<Transfer[]>;
  loading$: Observable<boolean>;

  constructor(
    private scrollService: WindowScrolling,
    private transferService: TransferService
  ) {
    this.transfers$ = this.transferService.entities$;
    this.loading$ = this.transferService.loading$;
  }

  ngOnInit(): void {
    this.transferService.getAll();
  }

  hideModal(): void {
    this.isPopupVisible = false;
    this.scrollService.enable();
  }

  newTransfer(): void {
    this.isPopupVisible = true;
    this.scrollService.disable();
  }
}
