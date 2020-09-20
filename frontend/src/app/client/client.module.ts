import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from '../shared/components/mainLayout/mainLayout.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AuthGuard} from '../auth/auth.guard';
import {BeneficiaryPageComponent} from './pages/beneficiary-page/beneficiary-page.component';
import {DepositPageComponent} from './pages/deposit-page/deposit-page.component';
import {DepositCurrencyPageComponent} from './pages/deposit-currency-page/deposit-currency-page.component';
import {TransferPageComponent} from './pages/transfer-page/transfer-page.component';
import {DepositModalComponent} from './deposit-modal/deposit-modal.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DepositModalComponent,
    BeneficiaryPageComponent,
    DepositPageComponent,
    DepositCurrencyPageComponent,
    HomePageComponent,
    TransferPageComponent
  ]
})
export class ClientModule{
}
