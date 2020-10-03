import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {RussCompany} from '../../../../../models/russCompany';
import {FormControlService} from '../../../../services/formControl.service';
import {RussCompanyService} from '../../services/russCompanies.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companiesList.component.html',
  styleUrls: ['./companiesList.component.scss']
})
export class CompaniesListComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';
  companies$: Observable<RussCompany[] | null>;

  isLoading$: Observable<boolean>;
  modalVisible = false;

  constructor(
    private store: Store,
    private formControlService: FormControlService,
    private router: Router,
    private companyService: RussCompanyService
  ) {
    this.companies$ = this.companyService.entities$;
    this.isLoading$ = this.companyService.loading$;
  }

  ngOnInit(): void {
    this.companyService.getAll();
  }

  newCompany(): void {
    this.modalVisible = true;
  }

  hideModal(): void {
    this.modalVisible = false;
  }

  viewCompany(company: RussCompany): void {
    this.router.navigate(['/', 'company-profile', company.id]);
  }

}
