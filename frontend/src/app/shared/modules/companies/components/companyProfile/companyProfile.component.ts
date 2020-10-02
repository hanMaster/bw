import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RussCompany} from '../../../../../models/russCompany';
import {
  hideCompanyModalAction,
  hideViewCompanyModalAction,
  showCompanyModalAction
} from '../../store/actions/modalControl.actions';
import {select, Store} from '@ngrx/store';
import {isPopupVisibleSelector} from '../../store/selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companyProfile.component.html',
  styleUrls: ['./companyProfile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';

  companyId: number;
  company: RussCompany;
  isPopupVisible$: Observable<boolean>;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.isPopupVisible$ = this.store.pipe(select(isPopupVisibleSelector));
    this.route.params.subscribe((param: Params) => {
      this.companyId = param.companyId;
    });

    if (history.state.data && history.state.data.company) {
      this.company = history.state.data.company;
    } else {
      this.router.navigate(['companies']);
    }
  }

  updateCompany(): void {
    const edit = true;
    this.store.dispatch(showCompanyModalAction({edit}));
  }

  hideModal(): void {
    this.store.dispatch(hideCompanyModalAction());
  }
}
