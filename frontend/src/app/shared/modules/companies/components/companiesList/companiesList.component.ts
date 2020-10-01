import {Component, HostBinding, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {RussCompany} from '../../../../../models/russCompany';
import {
  companiesSelector,
  isLoadingSelector,
  isPopupVisibleSelector,
  isShowPopupVisibleSelector
} from '../../store/selectors';
import {requestCompaniesAction} from '../../store/actions/requestCompanies.actions';
import {
  hideCompanyModalAction,
  hideViewCompanyModalAction,
  showCompanyModalAction,
  showViewCompanyModalAction
} from '../../store/actions/modalControl.actions';
import {FormControlService} from '../../../../services/formControl.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companiesList.component.html',
  styleUrls: ['./companiesList.component.scss']
})
export class CompaniesListComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';
  companies$: Observable<RussCompany[] | null>;

  isPopupVisible$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  isShowPopupVisible$: Observable<boolean>;

  constructor(private store: Store, private formControlService: FormControlService) {
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isPopupVisible$ = this.store.pipe(select(isPopupVisibleSelector));
    this.isShowPopupVisible$ = this.store.pipe(select(isShowPopupVisibleSelector));
    this.companies$ = this.store.pipe(select(companiesSelector));
    this.store.dispatch(requestCompaniesAction());
  }

  newCompany() {
    const edit = false;
    this.store.dispatch(showCompanyModalAction({edit}));
    this.formControlService.clearForm();
  }

  hideModal(): void {
    this.store.dispatch(hideCompanyModalAction());
  }

  viewCompany(id: number): void {
    this.store.dispatch(showViewCompanyModalAction({id}));
  }

  hideShowCompanyModal() {
    this.store.dispatch(hideViewCompanyModalAction());
  }
}
