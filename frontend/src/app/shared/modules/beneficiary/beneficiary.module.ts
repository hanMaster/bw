import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {BeneficiariesListComponent} from './components/beneficiariesList/beneficiariesList.component';
import {BeneficiaryModalComponent} from './components/beneficiaryModal/beneficiaryModal.component';
import {BeneficiaryProfileComponent} from './components/beneficiaryProfile/beneficiaryProfile.component';
import {AccountModalComponent} from './components/accountModal/accountModal.component';
import {BeneficiaryService} from './services/beneficiaries.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
  declarations: [
    BeneficiariesListComponent,
    BeneficiaryProfileComponent,
    BeneficiaryModalComponent,
    AccountModalComponent
  ],
  providers: [
    BeneficiaryService
  ],
  exports: [
    BeneficiariesListComponent,
    BeneficiaryProfileComponent
  ]
})
export class BeneficiaryModule {
}
