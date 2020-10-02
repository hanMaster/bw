import {Component, EventEmitter, HostBinding, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {take} from 'rxjs/operators';

import {companySelector, editModeSelector, validationErrorsSelector} from '../../store/selectors';
import {RussCompany} from '../../../../../models/russCompany';
import {editCompanyAction} from '../../store/actions/updateCompanies.actions';
import {addCompanyAction} from '../../store/actions/addCompanies.actions';
import {FormControlService} from '../../../../services/formControl.service';
import {CurrentUser} from '../../../../../models/currentUser';
import {currentUserSelector} from '../../../../../auth/store/selectors';


@Component({
  selector: 'app-new-company-modal',
  templateUrl: './companyModal.component.html',
  styleUrls: ['./companyModal.component.scss']
})
export class CompanyModalComponent implements OnInit, OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Output() closeClicked = new EventEmitter();
  @HostBinding('class') classList = 'modal-wrapper';

  form: FormGroup;
  cfSub: Subscription;
  ffSub: Subscription;
  errors$: Observable<any[]>;
  editMode$: Observable<boolean>;
  editMode = false;
  company: RussCompany;
  currentUser: CurrentUser;

  constructor(
    private store: Store,
    private formControlService: FormControlService
  ) {
  }


  ngOnInit(): void {
    console.log('Modal init');
    this.store.pipe(select(currentUserSelector), take(1)).subscribe(
      user => {
        this.currentUser = user;
      }
    );
    this.errors$ = this.store.pipe(select(validationErrorsSelector));
    this.editMode$ = this.store.pipe(select(editModeSelector));
    this.store.pipe(select(editModeSelector), take(1)).subscribe(
      editMode => {
        this.editMode = editMode;
      }
    );

    this.cfSub = this.formControlService.clearForm$
      .subscribe(() => {
        this.form.reset();
      });

    this.form = new FormGroup({
      company_name: new FormControl('', Validators.required),
      organization_form: new FormControl('', Validators.required),
      law_address: new FormControl('', Validators.required),
      inn: new FormControl('', Validators.required),
      kpp: new FormControl('', Validators.required),
      reg_number: new FormControl('', Validators.required),
    });

    if (this.editMode) {
      this.store.pipe(select(companySelector), take(1)).subscribe(
        (company: RussCompany) => {
          this.company = company;
        }
      );
      this.form.patchValue(this.company);
    }
  }

  closeModal(): void {
    this.closeClicked.emit();
  }

  onSubmit(): void {
    if (this.editMode) {
      const company: RussCompany = {
        id: this.company.id,
        user_id: this.currentUser.id,
        ...this.form.value
      };
      this.store.dispatch(editCompanyAction({company}));
    } else {
      const company: RussCompany = {
        ...this.form.value,
        user_id: this.currentUser.id
      };
      this.store.dispatch(addCompanyAction({company}));
    }
  }


  ngOnDestroy(): void {
    console.log('Destroy modal');
    if (this.cfSub) {
      this.cfSub.unsubscribe();
    }
    if (this.ffSub) {
      this.ffSub.unsubscribe();
    }
  }
}
