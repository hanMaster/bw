import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from '../shared/components/mainLayout/mainLayout.component';
import {HomePageComponent} from './pages/homePage/home-page.component';
import {AuthGuard} from '../auth/auth.guard';
import {DepositPageComponent} from './pages/depositPage/deposit-page.component';
import {DepositCurrencyPageComponent} from './pages/depositCurrencyPage/deposit-currency-page.component';
import {TransferPageComponent} from './pages/transferPage/transfer-page.component';
import {DepositModalComponent} from './deposit-modal/deposit-modal.component';
import {CompaniesListComponent} from '../shared/modules/companies/components/companiesList/companiesList.component';
import {CompanyProfileComponent} from '../shared/modules/companies/components/companyProfile/companyProfile.component';
import {BeneficiariesListComponent} from '../shared/modules/beneficiary/components/beneficiariesList/beneficiariesList.component';
import {BeneficiaryProfileComponent} from '../shared/modules/beneficiary/components/beneficiaryProfile/beneficiaryProfile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DpDatePickerModule} from 'ng2-date-picker';
import {TransferModalComponent} from './transferModal/transferModal.component';
import {DepositCurrencyCopletedPageComponent} from './pages/depositCurrencyCompletedPage/depositCurrencyCopletedPage.component';
import {TransferCompletedPageComponent} from './pages/transferCompletedPage/transferCompletedPage.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent, canActivate: [AuthGuard]},
      {path: 'beneficiary', component: BeneficiariesListComponent, canActivate: [AuthGuard]},
      {path: 'beneficiary-profile/:beneficiaryId', component: BeneficiaryProfileComponent, canActivate: [AuthGuard]},
      {path: 'companies', component: CompaniesListComponent, canActivate: [AuthGuard]},
      {path: 'company-profile/:companyId', component: CompanyProfileComponent, canActivate: [AuthGuard] },
      {path: 'deposit', component: DepositPageComponent, canActivate: [AuthGuard]},
      {path: 'deposit/:currency', component: DepositCurrencyPageComponent, canActivate: [AuthGuard]},
      {path: 'deposit/:currency/completed', component: DepositCurrencyCopletedPageComponent, canActivate: [AuthGuard]},
      {path: 'transfer', component: TransferPageComponent, canActivate: [AuthGuard]},
      {path: 'transfer/completed', component: TransferCompletedPageComponent, canActivate: [AuthGuard]},
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    DpDatePickerModule
  ],
  declarations: [
    DepositModalComponent,
    DepositPageComponent,
    DepositCurrencyPageComponent,
    DepositCurrencyCopletedPageComponent,
    HomePageComponent,
    TransferPageComponent,
    TransferCompletedPageComponent,
    TransferModalComponent
  ]
})
export class ClientModule{
}
