import {Component, HostBinding, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {DepositService} from '../services/deposit.service';
import {CurrentUser} from '../../models/currentUser';
import {currentUserSelector} from '../../auth/store/selectors';
import {take} from 'rxjs/operators';
import {RussCompanyService} from '../../shared/modules/companies/services/russCompanies.service';
import {RussCompany} from '../../models/russCompany';
import {QueryParams} from '@ngrx/data';

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
  currentUser: CurrentUser;
  adminCompanies$: Observable<RussCompany[]>;
  clientCompanies$: Observable<RussCompany[]>;

  constructor(
    private depositService: DepositService,
    private store: Store,
    private russCompanyService: RussCompanyService
  ) {
    let params: QueryParams = {assigned: 'true'};
    this.adminCompanies$ = this.russCompanyService.getWithQuery(params);
    params = {client: 'true'};
    this.clientCompanies$ = this.russCompanyService.getWithQuery(params);
  }

  ngOnInit(): void {
    this.store.pipe(select(currentUserSelector), take(1)).subscribe(
      user => {
        this.currentUser = user;
      }
    );

    this.form = new FormGroup({
      admin_company_invoice_number: new FormControl('', Validators.required),
      admin_company_invoice_date: new FormControl('', [Validators.required]),
      payment_order_number: new FormControl('', Validators.required),
      payment_order_date: new FormControl('', Validators.required),
      admin_company_bank_id: new FormControl('', [Validators.required]),
      admin_company_id: new FormControl('', Validators.required),
      user_company_id: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      payment_purpose: new FormControl('', Validators.required),
      payment_order_pdf: new FormControl('', Validators.required),
    });
  }

  closeModal(): void {
    this.closeClicked.emit();
  }

  handleErrors(err): void {
    this.errors = [];
    for (const [_, value] of Object.entries(err.error.error.errors)) {
      this.errors.push(value[0]);
    }
  }

  onSubmit(): void {

  }
}
