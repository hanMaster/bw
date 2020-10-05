import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {Beneficiary} from '../../../../../models/beneficiary';
import {BeneficiaryService} from '../../services/beneficiaries.service';
import {Location} from '@angular/common';


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


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyService: BeneficiaryService,
    private location: Location
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

  goBack(): void {
    this.location.back();
  }
}
