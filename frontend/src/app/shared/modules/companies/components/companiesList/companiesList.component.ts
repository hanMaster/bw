import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {RussCompany} from '../../../../../models/russCompany';
import {RussCompanyService} from '../../services/russCompanies.service';
import {CurrentUser} from '../../../../../models/currentUser';
import {currentUserSelector} from '../../../../../auth/store/selectors';
import {take} from 'rxjs/operators';

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
  currentUser$: Observable<CurrentUser>;

  constructor(
    private router: Router,
    private companyService: RussCompanyService,
    private store: Store
  ) {
    this.companies$ = this.companyService.entities$;
    this.isLoading$ = this.companyService.loading$;
  }

  ngOnInit(): void {
    this.companyService.getAll();
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

  newCompany(): void {
    this.modalVisible = true;
  }

  hideModal(): void {
    this.modalVisible = false;
  }

  viewCompany(company: RussCompany): void {
    this.currentUser$.pipe(take(1)).subscribe(
      (user: CurrentUser) => {
        if (user.role === 'admin') {
          this.router.navigate(['/admin', 'company-profile', company.id]);
        } else {
          this.router.navigate(['/', 'company-profile', company.id]);
        }
      }
    );
  }

}
