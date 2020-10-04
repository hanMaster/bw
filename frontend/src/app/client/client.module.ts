import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from '../shared/components/mainLayout/mainLayout.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AuthGuard} from '../auth/auth.guard';
import {DepositPageComponent} from './pages/deposit-page/deposit-page.component';
import {DepositCurrencyPageComponent} from './pages/deposit-currency-page/deposit-currency-page.component';
import {TransferPageComponent} from './pages/transfer-page/transfer-page.component';
import {DepositModalComponent} from './deposit-modal/deposit-modal.component';
import {CompaniesListComponent} from '../shared/modules/companies/components/companiesList/companiesList.component';
import {BanksListComponent} from '../shared/modules/banks/components/banks-list/banks-list.component';
import {CompanyProfileComponent} from '../shared/modules/companies/components/companyProfile/companyProfile.component';
import {ForeignBanksListComponent} from '../shared/modules/foreignBanks/components/foreignBanksList/foreignBanksList.component';
import {BeneficiariesListComponent} from '../shared/modules/beneficiary/components/beneficiariesList/beneficiariesList.component';
import {BeneficiaryProfileComponent} from '../shared/modules/beneficiary/components/beneficiaryProfile/beneficiaryProfile.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent, canActivate: [AuthGuard]},
      {path: 'beneficiary', component: BeneficiariesListComponent, canActivate: [AuthGuard]},
      {path: 'beneficiary-profile/:beneficiaryId', component: BeneficiaryProfileComponent, canActivate: [AuthGuard]},
      {path: 'foreign-banks', component: ForeignBanksListComponent, canActivate: [AuthGuard]},
      {path: 'companies', component: CompaniesListComponent, canActivate: [AuthGuard]},
      {path: 'company-profile/:companyId', component: CompanyProfileComponent, canActivate: [AuthGuard] },
      {path: 'rus-banks', component: BanksListComponent, canActivate: [AuthGuard]},
      {path: 'deposit', component: DepositPageComponent, canActivate: [AuthGuard]},
      {path: 'deposit/:currency', component: DepositCurrencyPageComponent, canActivate: [AuthGuard]},
      {path: 'transfer', component: TransferPageComponent, canActivate: [AuthGuard]},
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    DepositModalComponent,
    DepositPageComponent,
    DepositCurrencyPageComponent,
    HomePageComponent,
    TransferPageComponent
  ]
})
export class ClientModule{
}
