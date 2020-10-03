import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {FormControlService} from '../../../../services/formControl.service';
import {BeneficiaryService} from '../../services/beneficiaries.service';
import {Beneficiary} from '../../../../../models/beneficiary';

@Component({
  selector: 'app-beneficiary-list',
  templateUrl: './beneficiariesList.component.html',
  styleUrls: ['./beneficiariesList.component.scss']
})
export class BeneficiariesListComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';
  companies$: Observable<Beneficiary[] | null>;

  isLoading$: Observable<boolean>;
  modalVisible = false;

  constructor(
    private store: Store,
    private formControlService: FormControlService,
    private router: Router,
    private companyService: BeneficiaryService
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

  viewCompany(beneficiary: Beneficiary): void {
    this.router.navigate(['/', 'beneficiary-profile', beneficiary.id]);
  }

}
