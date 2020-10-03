import {Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

import {RussCompany} from '../../../../../models/russCompany';
import {RussAccountService} from '../../services/russAccounts.service';
import {RussBankService} from '../../../banks/russBank.service';
import {RussAccount} from '../../../../../models/russAccount';
import {RussBank} from '../../../../../models/russBank';


@Component({
  selector: 'app-account-modal',
  templateUrl: './accountModal.component.html',
  styleUrls: ['./accountModal.component.scss']
})
export class AccountModalComponent implements OnInit, OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Output() closeClicked = new EventEmitter();
  @Input() company: RussCompany;
  @Input() selected: RussAccount;
  @HostBinding('class') classList = 'modal-wrapper';

  form: FormGroup;
  errors$: Observable<any[]>;
  errors: string[];
  account: RussAccount;
  banks$: Observable<RussBank[] | null>;

  constructor(
    private accountService: RussAccountService,
    private bankService: RussBankService
  ) {
    this.banks$ = this.bankService.getAll();
  }


  ngOnInit(): void {

    console.log('selected', this.selected);

    this.form = new FormGroup({
      account_number: new FormControl('', Validators.required),
      russian_bank_id: new FormControl('', Validators.required),
    });

    if (this.selected) {
      this.form.patchValue(this.selected);
    }
  }

  closeModal(): void {
    this.closeClicked.emit();
  }

  onSubmit(): void {
    if (this.selected) {
      const account: RussAccount = {
        id: this.selected.id,
        account_number: this.form.value.account_number,
        russ_company_id: this.company.id,
        russian_bank_id: Number(this.form.value.russian_bank_id)
      };
      this.accountService.update(account).pipe(take(1)).subscribe(
        () => {
          this.closeModal();
        },
        err => {
          this.handleErrors(err);
        }
      );
    } else {
      const account: RussAccount = {
        account_number: this.form.value.account_number,
        russ_company_id: this.company.id,
        russian_bank_id: Number(this.form.value.russian_bank_id)
      };
      this.accountService.add(account).pipe(take(1)).subscribe(
        () => {
          this.closeModal();
        },
        err => {
          this.handleErrors(err);
        }
      );
    }

  }

  handleErrors(err): void {
    this.errors = [];
    for (const [_, value] of Object.entries(err.error.error.errors)) {
      this.errors.push(value[0]);
    }
  }


  ngOnDestroy(): void {

  }
}
