import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

import {ForeignCompany} from '../../../../../models/foreignCompany';
import {ForeignCompanyService} from '../../services/foreignCompanies.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './foreignCompaniesList.component.html'
})
export class ForeignCompaniesListComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';
  companies$: Observable<ForeignCompany[] | null>;
  isLoading$: Observable<boolean>;
  modalVisible = false;

  constructor(
    private router: Router,
    private companyService: ForeignCompanyService
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

  viewCompany(company: ForeignCompany): void {
    this.router.navigate(['/admin', 'foreign-company-profile', company.id]);
  }

}
