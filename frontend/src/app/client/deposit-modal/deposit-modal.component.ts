import {Component, HostBinding, Input, OnInit, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {DepositService} from '../services/deposit.service';
import {CurrentUser} from '../../models/currentUser';
import {currentUserSelector} from '../../auth/store/selectors';
import {filter, first, take} from 'rxjs/operators';
import {RussCompanyService} from '../../shared/modules/companies/services/russCompanies.service';
import {RussCompany} from '../../models/russCompany';
import {QueryParams} from '@ngrx/data';
import {IDatePickerConfig} from 'ng2-date-picker';
import {Beneficiary} from '../../models/beneficiary';
import {Deposit} from '../../models/deposit';

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

  form: FormGroup;
  errors: string[];
  adminCompanies$: Observable<RussCompany[]>;
  clientCompanies$: Observable<RussCompany[]>;
  selectedFile = null;
  datePickerConfig: IDatePickerConfig = {
    locale: 'ru',
    firstDayOfWeek: 'mo',
    format: 'DD MMM yyyy'
  };

  constructor(
    private depositService: DepositService,
    private russCompanyService: RussCompanyService
  ) {
    let params: QueryParams = {assigned: 'true'};
    this.adminCompanies$ = this.russCompanyService.getWithQuery(params);
    params = {client: 'true'};
    this.clientCompanies$ = this.russCompanyService.getWithQuery(params);
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      admin_company_invoice_number: new FormControl(null, Validators.required),
      admin_company_invoice_date: new FormControl('', [Validators.required]),
      payment_order_number: new FormControl(null, Validators.required),
      payment_order_date: new FormControl('', Validators.required),
      admin_company_id: new FormControl(null, Validators.required),
      user_company_id: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required),
      payment_purpose: new FormControl('', Validators.required),
      payment_order_pdf: new FormControl('', Validators.required),
    });
  }

  closeModal(): void {
    this.closeClicked.emit();
  }

  handleErrors(err): void {
    console.log('err', err)
    this.errors = [];
    for (const [_, value] of Object.entries(err.error.errors)) {
      this.errors.push(value[0]);
    }
  }

  onSubmit(): void {

    const deposit: Deposit = {
      ...this.form.value,
      currency: this.currencyProp,
      selectedFile: this.selectedFile
    };
    this.depositService.addDeposit(deposit).pipe(take(1)).subscribe(
      () => {
        this.closeModal();
      },
      err => {
        this.handleErrors(err);
      }
    );


    // if (this.selectedFile) {
    //   this.depositService.uploadFile(this.selectedFile).pipe(take(3)).subscribe(
    //     info => {
    //       console.log('info', info)
    //     },
    //     error => {
    //       console.log('error', error);
    //     }
    //   );
    // }

  }

  onFileSelect($event: any): void {
    this.selectedFile = $event.target.files[0];
    this.form.value.payment_order_pdf = this.selectedFile.name;
  }
}
