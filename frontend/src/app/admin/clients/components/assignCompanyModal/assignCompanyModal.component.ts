import {Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {Client} from '../../../../models/client';
import {RussCompany} from '../../../../models/russCompany';
import {UserCompaniesService} from '../../services/userCompanies.service';
import {RussCompanyService} from '../../../../shared/modules/companies/services/russCompanies.service';
import {UserCompanies} from '../../../../models/userCompanies';


@Component({
  selector: 'app-assign-company-modal',
  templateUrl: './assignCompanyModal.component.html'
})
export class AssignCompanyModalComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Output() closeClicked = new EventEmitter();
  @Input() client: Client;
  @Input() selected: RussCompany;
  @HostBinding('class') classList = 'modal-wrapper';

  form: FormGroup;
  errors: string[];
  adminCompanies$: Observable<RussCompany[] | null>;

  constructor(
    private userCompaniesService: UserCompaniesService,
    private adminCompaniesService: RussCompanyService
  ) {
    this.adminCompanies$ = this.adminCompaniesService.getAll();
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

  onSubmit(): void {
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

  handleErrors(err): void {
    this.errors = [];
    for (const [_, value] of Object.entries(err.error.error.errors)) {
      this.errors.push(value[0]);
    }
  }
}
