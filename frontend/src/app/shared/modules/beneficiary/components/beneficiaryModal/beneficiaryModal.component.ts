import {Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {take} from 'rxjs/operators';


import {CurrentUser} from '../../../../../models/currentUser';
import {currentUserSelector} from '../../../../../auth/store/selectors';
import {BeneficiaryService} from '../../services/beneficiaries.service';
import {Beneficiary} from '../../../../../models/beneficiary';



@Component({
  selector: 'app-beneficiary-modal',
  templateUrl: './beneficiaryModal.component.html',
  styleUrls: ['./beneficiaryModal.component.scss']
})
export class BeneficiaryModalComponent implements OnInit, OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Output() closeClicked = new EventEmitter();
  @Input() company: Beneficiary;
  @HostBinding('class') classList = 'modal-wrapper';

  form: FormGroup;
  currentUser: CurrentUser;
  errors: string[];

  constructor(
    private store: Store,
    private companyService: BeneficiaryService
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
      beneficiary_alias: new FormControl('', Validators.required),
      beneficiary_name: new FormControl('', Validators.required),
      address_line1: new FormControl('', Validators.required),
      address_line2: new FormControl(''),
      address_line3: new FormControl(''),
      beneficiary_email_www: new FormControl('', Validators.required),
      contact_email: new FormControl('', Validators.required),
      bank_name: new FormControl('', Validators.required),
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
      const company: Beneficiary = {
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
      const company: Beneficiary = {
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


  ngOnDestroy(): void {

  }
}
