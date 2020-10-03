import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {RussCompany} from '../../../../../models/russCompany';
import {RussCompanyService} from '../../services/russCompanies.service';
import {Observable} from 'rxjs';
import {RussAccountService} from '../../services/russAccounts.service';
import {RussAccount} from '../../../../../models/russAccount';
import {QueryParams} from '@ngrx/data';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companyProfile.component.html',
  styleUrls: ['./companyProfile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';

  companyId: number;
  company$: Observable<RussCompany>;
  companyModalVisible = false;
  accountModalVisible = false;
  selected: RussAccount = null;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyService: RussCompanyService,
    private accountService: RussAccountService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.companyId = param.companyId;
    });

    this.company$ = this.companyService.getByKey(this.companyId);
    // const params: QueryParams = {
    //   companyId: this.companyId.toString()
    // };
    // this.accounts$ = this.accountService.getWithQuery(params);
  }

  updateCompany(): void {
    this.companyModalVisible = true;
  }

  hideCompanyModal(): void {
    this.companyModalVisible = false;
    this.company$ = this.companyService.getByKey(this.companyId);
  }

  hideAccountModal(): void {
    this.accountModalVisible = false;
    this.company$ = this.companyService.getByKey(this.companyId);
  }

  addAccount(): void {
    this.accountModalVisible = true;
  }

  editAccount(account: RussAccount): void {
    this.accountModalVisible = true;
    this.selected = account;
  }
}
