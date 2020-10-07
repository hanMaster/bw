import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ForeignCompaniesListComponent} from './components/foreignCompaniesList/foreignCompaniesList.component';
import {ForeignCompanyProfileComponent} from './components/foreignCompanyProfile/foreignCompanyProfile.component';
import {ForeignCompanyService} from './services/foreignCompanies.service';
import {ForeignCompanyModalComponent} from './components/foreignCompanyModal/foreignCompanyModal.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
  declarations: [
    ForeignCompaniesListComponent,
    ForeignCompanyProfileComponent,
    ForeignCompanyModalComponent
  ],
  providers: [
    ForeignCompanyService
  ],
  exports: [
    ForeignCompaniesListComponent,
    ForeignCompanyProfileComponent
  ]
})
export class ForeignCompaniesModule {
}
