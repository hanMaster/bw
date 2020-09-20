import {Component, HostBinding, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-complete-deposit-modal',
  templateUrl: './completeDepositModal.component.html',
  styleUrls: ['./completeDepositModal.component.scss']
})
export class CompleteDepositModalComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('currency') currencyProp: string;

  @Output() closeClicked = new EventEmitter();

  @HostBinding('class') classList = 'modal-wrapper';

  constructor() {
  }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.closeClicked.emit();
  }

}
