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
import {ForeignCompanyService} from '../../shared/modules/foreignCompanies/services/foreignCompanies.service';
import {ForeignCompany} from '../../models/foreignCompany';

@Component({
  selector: 'app-deposit-modal',
  templateUrl: './deposit-modal.component.html',
  styleUrls: ['./deposit-modal.component.scss']
})
export class DepositModalComponent implements OnInit {

  @Input() currency: string;

  @Output() closeClicked = new EventEmitter();

  @HostBinding('class') classList = 'modal-wrapper';

  form: FormGroup;
  errors: string[];
  rusCompanies$: Observable<RussCompany[]>;
  forCompanies$: Observable<ForeignCompany[]>;
  clientCompanies$: Observable<RussCompany[]>;
  selectedFile = null;
  datePickerConfig: IDatePickerConfig = {
    locale: 'ru',
    firstDayOfWeek: 'mo',
    format: 'DD MMM yyyy'
  };

  constructor(
    private depositService: DepositService,
    private rusCompanyService: RussCompanyService,
    private forCompanyService: ForeignCompanyService
  ) {
    let params: QueryParams = {assigned: 'true'};
    this.rusCompanies$ = this.rusCompanyService.getWithQuery(params);
    this.forCompanies$ = this.forCompanyService.getWithQuery(params);
    params = {client: 'true'};
    this.clientCompanies$ = this.rusCompanyService.getWithQuery(params);
  }

  ngOnInit(): void {
    if (this.currency === 'rub') {
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
    } else {
      this.form = new FormGroup({
        admin_company_id: new FormControl(null, Validators.required),
        user_company_id: new FormControl(null, Validators.required),
        amount: new FormControl(null, Validators.required),
        payment_purpose: new FormControl('', Validators.required),
        payment_order_pdf: new FormControl('', Validators.required),
      });
    }
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

    const deposit: Deposit = {
      ...this.form.value,
      currency: this.currency,
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
  }

  onFileSelect($event: any): void {
    this.selectedFile = $event.target.files[0];
    this.form.value.payment_order_pdf = this.selectedFile.name;
  }
}
