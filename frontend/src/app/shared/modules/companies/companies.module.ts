import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {CompaniesListComponent} from './components/companiesList/companiesList.component';
import {CompanyModalComponent} from './components/companyModal/companyModal.component';
import {CompanyProfileComponent} from './components/companyProfile/companyProfile.component';
import {RussCompanyService} from './services/russCompanies.service';
import {AccountModalComponent} from './components/accountModal/accountModal.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
  declarations: [
    CompaniesListComponent,
    CompanyProfileComponent,
    CompanyModalComponent,
    AccountModalComponent
  ],
  providers: [
    RussCompanyService
  ],
  exports: [
    CompaniesListComponent,
    CompanyProfileComponent
  ]
})
export class CompaniesModule {
}
