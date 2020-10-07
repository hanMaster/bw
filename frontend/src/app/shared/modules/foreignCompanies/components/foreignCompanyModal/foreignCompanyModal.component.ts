import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {take} from 'rxjs/operators';

import {CurrentUser} from '../../../../../models/currentUser';
import {currentUserSelector} from '../../../../../auth/store/selectors';
import {ForeignCompanyService} from '../../services/foreignCompanies.service';
import {ForeignCompany} from '../../../../../models/foreignCompany';



@Component({
  selector: 'app-foreign-company-modal',
  templateUrl: './foreignCompanyModal.component.html'
})
export class ForeignCompanyModalComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Output() closeClicked = new EventEmitter();
  @Input() company: ForeignCompany;
  @HostBinding('class') classList = 'modal-wrapper';

  form: FormGroup;
  currentUser: CurrentUser;
  errors: string[];

  constructor(
    private store: Store,
    private companyService: ForeignCompanyService
  ) {
  }


  ngOnInit(): void {
    console.log('Modal init');
    this.store.pipe(select(currentUserSelector), take(1)).subscribe(
      user => {
        this.currentUser = user;
      }
    );

    this.form = new FormGroup({
      company_name: new FormControl('', Validators.required),
      address_line1: new FormControl('', Validators.required),
      bank_name: new FormControl('', Validators.required),
      bank_code: new FormControl('', Validators.required),
      branch_code: new FormControl('', Validators.required),
      bank_address: new FormControl('', Validators.required),
      swift_code: new FormControl('', Validators.required),
      account_number: new FormControl('', Validators.required),
    });

    if (this.company && this.company.id) {
      this.form.patchValue(this.company);
    }
  }

  closeModal(): void {
    this.closeClicked.emit();
  }

  onSubmit(): void {
    if (this.company && this.company.id) {
      const company: ForeignCompany = {
        id: this.company.id,
        user_id: this.currentUser.id,
        ...this.form.value
      };
      this.companyService.update(company).pipe(take(1)).subscribe(
        () => {
          this.closeModal();
        },
        err => {
          this.handleErrors(err);
        }
      );
    } else {
      const company: ForeignCompany = {
        ...this.form.value,
        user_id: this.currentUser.id
      };
      this.companyService.add(company).pipe(take(1)).subscribe(
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
}
