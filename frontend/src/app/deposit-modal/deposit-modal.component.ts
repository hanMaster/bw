import {Component, HostBinding, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss']
})
export class DepositModalComponent implements OnInit {

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
