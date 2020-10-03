import {Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

import {Beneficiary} from '../../../../../models/beneficiary';
import {ForeignAccount} from '../../../../../models/foreignAccount';
import {ForeignBank} from '../../../../../models/foreignBank';
import {ForeignAccountService} from '../../services/foreignAccounts.service';
import {ForeignBankService} from '../../../foreignBanks/foreignBank.service';



@Component({
  selector: 'app-account-modal',
  templateUrl: './accountModal.component.html',
  styleUrls: ['./accountModal.component.scss']
})
export class AccountModalComponent implements OnInit, OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Output() closeClicked = new EventEmitter();
  @Input() company: Beneficiary;
  @Input() selected: ForeignAccount;
  @HostBinding('class') classList = 'modal-wrapper';

  form: FormGroup;
  errors$: Observable<any[]>;
  errors: string[];
  account: ForeignAccount;
  banks$: Observable<ForeignBank[] | null>;

  constructor(
    private accountService: ForeignAccountService,
    private bankService: ForeignBankService
  ) {
    this.banks$ = this.bankService.getAll();
  }


  ngOnInit(): void {

    console.log('selected', this.selected);

    this.form = new FormGroup({
      account_number: new FormControl('', Validators.required),
      foreign_bank_id: new FormControl('', Validators.required),
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
      const account: ForeignAccount = {
        id: this.selected.id,
        account_number: this.form.value.account_number,
        beneficiary_id: this.company.id,
        foreign_bank_id: Number(this.form.value.foreign_bank_id)
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
      const account: ForeignAccount = {
        account_number: this.form.value.account_number,
        beneficiary_id: this.company.id,
        foreign_bank_id: Number(this.form.value.foreign_bank_id)
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
