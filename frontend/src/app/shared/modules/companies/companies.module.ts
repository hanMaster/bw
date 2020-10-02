import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {CompaniesListComponent} from './components/companiesList/companiesList.component';
import {CompanyModalComponent} from './components/companyModal/companyModal.component';
import {ShowCompanyModalComponent} from './components/showCompanyModal/showCompanyModal.component';
import {AddCompanyEffect} from './store/effects/addCompany.effect';
import {UpdateCompanyEffect} from './store/effects/updateCompany.effect';
import {RequestCompanyEffect} from './store/effects/requestCompany.effect';
import {CompaniesService} from './services/companies.service';
import {reducers} from './store/reducers';
import {RouterModule} from '@angular/router';
import {CompanyProfileComponent} from './components/companyProfile/companyProfile.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StoreModule.forFeature('companies', reducers),
        EffectsModule.forFeature([AddCompanyEffect, UpdateCompanyEffect, RequestCompanyEffect]),
        RouterModule
    ],
  declarations: [
    CompaniesListComponent,
    CompanyProfileComponent,
    CompanyModalComponent,
    ShowCompanyModalComponent,
  ],
  providers: [
    CompaniesService
  ],
  exports: [
    CompaniesListComponent,
    CompanyProfileComponent
  ]
})
export class CompaniesModule {
}
