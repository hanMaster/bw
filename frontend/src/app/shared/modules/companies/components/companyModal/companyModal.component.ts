import {Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {take} from 'rxjs/operators';

import {RussCompany} from '../../../../../models/russCompany';
import {CurrentUser} from '../../../../../models/currentUser';
import {currentUserSelector} from '../../../../../auth/store/selectors';
import {RussCompanyService} from '../../services/russCompanies.service';


@Component({
  selector: 'app-company-modal',
  templateUrl: './companyModal.component.html',
  styleUrls: ['./companyModal.component.scss']
})
export class CompanyModalComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Output() closeClicked = new EventEmitter();
  @Input() company: RussCompany;
  @HostBinding('class') classList = 'modal-wrapper';

  form: FormGroup;
  currentUser: CurrentUser;
  errors: string[];

  constructor(
    private store: Store,
    private companyService: RussCompanyService
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
      organization_form: new FormControl('', Validators.required),
      law_address: new FormControl('', Validators.required),
      inn: new FormControl('', Validators.required),
      kpp: new FormControl('', Validators.required),
      reg_number: new FormControl('', Validators.required),
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
      const company: RussCompany = {
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
      const company: RussCompany = {
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
