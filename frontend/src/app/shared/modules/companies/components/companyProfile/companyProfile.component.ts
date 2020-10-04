import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';

import {RussCompany} from '../../../../../models/russCompany';
import {RussCompanyService} from '../../services/russCompanies.service';
import {RussAccount} from '../../../../../models/russAccount';

@Component({
  selector: 'app-company-profile',
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
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.companyId = param.companyId;
    });

    this.company$ = this.companyService.getByKey(this.companyId);
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

  goBack(): void {
    this.location.back();
  }
}
