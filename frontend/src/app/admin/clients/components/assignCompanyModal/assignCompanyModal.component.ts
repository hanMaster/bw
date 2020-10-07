import {Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {Client} from '../../../../models/client';
import {RussCompany} from '../../../../models/russCompany';
import {UserCompaniesService} from '../../services/userCompanies.service';
import {RussCompanyService} from '../../../../shared/modules/companies/services/russCompanies.service';
import {UserCompanies} from '../../../../models/userCompanies';
import {ForeignCompany} from '../../../../models/foreignCompany';
import {ForeignCompanyService} from '../../../../shared/modules/foreignCompanies/services/foreignCompanies.service';
import {UserForCompanies} from '../../../../models/userForCompanies';
import {UserForCompaniesService} from '../../services/userForCompanies.service';


@Component({
  selector: 'app-assign-company-modal',
  templateUrl: './assignCompanyModal.component.html'
})
export class AssignCompanyModalComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Output() closeClicked = new EventEmitter();
  @Input() RusFor: string;
  @Input() client: Client;
  @Input() selected: RussCompany | ForeignCompany;
  @HostBinding('class') classList = 'modal-wrapper';

  form: FormGroup;
  errors: string[];
  rusCompanies$: Observable<RussCompany[] | null>;
  forCompanies$: Observable<ForeignCompany[] | null>;

  constructor(
    private userCompaniesService: UserCompaniesService,
    private userForCompaniesService: UserForCompaniesService,
    private rusCompaniesService: RussCompanyService,
    private forCompaniesService: ForeignCompanyService
  ) {
    this.rusCompanies$ = this.rusCompaniesService.getAll();
    this.forCompanies$ = this.forCompaniesService.getAll();
  }


  ngOnInit(): void {

    this.form = new FormGroup({
      admin_company_id: new FormControl('', Validators.required),
    });

    if (this.selected) {
      this.form.patchValue(this.selected);
    }
  }

  closeModal(): void {
    this.closeClicked.emit();
  }

  onRusSubmit(): void {
    console.log('rusSubmit');
    const userCompany: UserCompanies = {
      user_id: this.client.id,
      admin_company_id: Number(this.form.value.admin_company_id)
    };
    if (this.selected) {
      //id = old_company_id need to pass update method of ngrx/data
      userCompany.id = this.selected.id;
      this.userCompaniesService.update(userCompany).pipe(take(1)).subscribe(
        () => {
          this.closeModal();
        },
        err => {
          this.handleErrors(err);
        }
      );
    } else {
      this.userCompaniesService.add(userCompany).pipe(take(1)).subscribe(
        () => {
          this.closeModal();
        },
        err => {
          this.handleErrors(err);
        }
      );
    }
  }


  onForSubmit(): void {
    console.log('forSubmit');
    const userForCompany: UserForCompanies = {
      user_id: this.client.id,
      admin_company_id: Number(this.form.value.admin_company_id)
    };
    if (this.selected) {
      //id = old_company_id need to pass update method of ngrx/data
      userForCompany.id = this.selected.id;
      this.userForCompaniesService.update(userForCompany).pipe(take(1)).subscribe(
        () => {
          this.closeModal();
        },
        err => {
          this.handleErrors(err);
        }
      );
    } else {
      this.userForCompaniesService.add(userForCompany).pipe(take(1)).subscribe(
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
