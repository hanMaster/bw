import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {Beneficiary} from '../../../../../models/beneficiary';
import {ForeignAccount} from '../../../../../models/foreignAccount';
import {BeneficiaryService} from '../../services/beneficiaries.service';


@Component({
  selector: 'app-companies-list',
  templateUrl: './beneficiaryProfile.component.html',
  styleUrls: ['./beneficiaryProfile.component.scss']
})
export class BeneficiaryProfileComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';

  beneficiaryId: number;
  company$: Observable<Beneficiary>;
  companyModalVisible = false;
  accountModalVisible = false;
  selected: ForeignAccount = null;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyService: BeneficiaryService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.beneficiaryId = param.beneficiaryId;
    });

    this.company$ = this.companyService.getByKey(this.beneficiaryId);

  }

  updateCompany(): void {
    this.companyModalVisible = true;
  }

  hideCompanyModal(): void {
    this.companyModalVisible = false;
    this.company$ = this.companyService.getByKey(this.beneficiaryId);
  }

  hideAccountModal(): void {
    this.accountModalVisible = false;
    this.company$ = this.companyService.getByKey(this.beneficiaryId);
  }

  addAccount(): void {
    this.accountModalVisible = true;
  }

  editAccount(account: ForeignAccount): void {
    this.accountModalVisible = true;
    this.selected = account;
  }
}
