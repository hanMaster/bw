import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/components/login/login.component';
import {HomePageComponent} from './client/pages/home-page/home-page.component';
import {BeneficiaryPageComponent} from './client/pages/beneficiary-page/beneficiary-page.component';
import {DepositPageComponent} from './client/pages/deposit-page/deposit-page.component';
import {TransferPageComponent} from './client/pages/transfer-page/transfer-page.component';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';
import {DepositCurrencyPageComponent} from './client/pages/deposit-currency-page/deposit-currency-page.component';
import {AuthGuard} from './auth/auth.guard';
import {AdminHomePageComponent} from './admin/pages/admin-home-page/admin-home-page.component';
import {AdminClientsPageComponent} from './admin/pages/admin-clients-page/admin-clients-page.component';
import {AdminDepositsPageComponent} from './admin/pages/admin-deposits-page/admin-deposits-page.component';
import {AdminTransfersPageComponent} from './admin/pages/admin-transfers-page/admin-transfers-page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent, canActivate: [AuthGuard]},
      {path: 'beneficiary', component: BeneficiaryPageComponent, canActivate: [AuthGuard]},
      {path: 'deposit', component: DepositPageComponent, canActivate: [AuthGuard]},
      {path: 'deposit/:currency', component: DepositCurrencyPageComponent, canActivate: [AuthGuard]},
      {path: 'transfer', component: TransferPageComponent, canActivate: [AuthGuard]},
    ]
  },
  {
    path: 'admin', component: MainLayoutComponent, children: [
      {path: '', component: AdminHomePageComponent, canActivate: [AuthGuard]},
      {path: 'clients', component: AdminClientsPageComponent, canActivate: [AuthGuard]},
      {path: 'deposits', component: AdminDepositsPageComponent, canActivate: [AuthGuard]},
      {path: 'transfers', component: AdminTransfersPageComponent, canActivate: [AuthGuard]},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
