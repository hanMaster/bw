import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';
import {ForeignCompany} from '../../../../../models/foreignCompany';
import {ForeignCompanyService} from '../../services/foreignCompanies.service';


@Component({
  selector: 'app-foreign-company-profile',
  templateUrl: './foreignCompanyProfile.component.html'
})
export class ForeignCompanyProfileComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';

  companyId: number;
  company$: Observable<ForeignCompany>;
  companyModalVisible = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyService: ForeignCompanyService,
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

  goBack(): void {
    this.location.back();
  }
}
