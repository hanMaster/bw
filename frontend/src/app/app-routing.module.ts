import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/components/login/login.component';
import {HomePageComponent} from './home-page/home-page.component';
import {BeneficiaryPageComponent} from './beneficiary-page/beneficiary-page.component';
import {DepositPageComponent} from './deposit-page/deposit-page.component';
import {TransferPageComponent} from './transfer-page/transfer-page.component';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';
import {DepositCurrencyPageComponent} from './deposit-currency-page/deposit-currency-page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'beneficiary', component: BeneficiaryPageComponent},
      {path: 'deposit', component: DepositPageComponent},
      {path: 'deposit/:currency', component: DepositCurrencyPageComponent},
      {path: 'transfer', component: TransferPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
