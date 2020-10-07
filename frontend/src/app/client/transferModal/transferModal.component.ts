import {Component, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

import {DepositService} from '../services/deposit.service';
import {first, take} from 'rxjs/operators';
import {Beneficiary} from '../../models/beneficiary';
import {BeneficiaryService} from '../../shared/modules/beneficiary/services/beneficiaries.service';
import {TransferService} from '../services/transfer.service';
import {Transfer} from '../../models/transfer';

@Component({
  selector: 'app-transfer-modal',
  templateUrl: './transferModal.component.html'
})
export class TransferModalComponent implements OnInit {

  @Output() closeClicked = new EventEmitter();

  @HostBinding('class') classList = 'modal-wrapper';

  form: FormGroup;
  errors: string[];
  beneficiaries: Beneficiary[];
  selectedFile = null;

  constructor(
    private depositService: DepositService,
    private beneficiaryService: BeneficiaryService,
    private transferService: TransferService
  ) {
    this.beneficiaryService.getAll().pipe(first()).subscribe(
      beneficiaries => {
        this.beneficiaries = beneficiaries;
      }
    );
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      beneficiary_id: new FormControl(null, Validators.required),
      account_number: new FormControl({value: '', disabled: true}),
      beneficiary_bank_name: new FormControl({value: '', disabled: true}),
      bank_address: new FormControl({value: '', disabled: true}),
      swift_code: new FormControl({value: '', disabled: true}),
      currency: new FormControl('usd', Validators.required),
      amount: new FormControl(null, Validators.required),
      payment_purpose: new FormControl('Payment for goods', Validators.required),
      invoice_pdf: new FormControl('', Validators.required),
    });
  }

  closeModal(): void {
    this.closeClicked.emit();
  }

  handleErrors(err): void {
    this.errors = [];
    for (const [_, value] of Object.entries(err.error.errors)) {
      this.errors.push(value[0]);
    }
  }

  onSubmit(): void {

    const transfer: Transfer = {
      ...this.form.value,
      selectedFile: this.selectedFile
    };
    this.transferService.addTransfer(transfer).pipe(take(1)).subscribe(
      () => {
        this.closeModal();
      },
      err => {
        this.handleErrors(err);
      }
    );
  }

  onFileSelect($event: any): void {
    this.selectedFile = $event.target.files[0];
    this.form.value.payment_order_pdf = this.selectedFile.name;
  }

  setValues(): void {
    const id = this.form.value.beneficiary_id;
    const beneficiary = this.beneficiaries.find(ben => ben.id === +id);
    this.form.patchValue({account_number: beneficiary.account_number, disabled: true});
    this.form.patchValue({beneficiary_bank_name: beneficiary.bank_name, disabled: true});
    this.form.patchValue({bank_address: beneficiary.bank_address, disabled: true});
    this.form.patchValue({swift_code: beneficiary.swift_code, disabled: true});
  }
}
