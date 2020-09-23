import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminHomePageComponent} from './pages/admin-home-page/admin-home-page.component';
import {AuthGuard} from '../auth/auth.guard';
import {AdminDepositsPageComponent} from './pages/admin-deposits-page/admin-deposits-page.component';
import {AdminDepositsCurrencyPageComponent} from './pages/adminDepositsCurrencyPage/components/adminDepositsCurrencyPage/adminDepositsCurrencyPage.component';
import {AdminDepositsCurrencyCompletedPageComponent} from './pages/admin-deposits-currency-completed-page/admin-deposit-currency-completed-page.component';
import {AdminTransfersPageComponent} from './pages/admin-transfers-page/admin-transfers-page.component';
import {CompleteDepositModalModule} from './completeDepositModal/completeDepositModal.module';
import {MainLayoutComponent} from '../shared/components/mainLayout/mainLayout.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import {NavComponent} from '../shared/components/nav/nav.component';
import {ClientsModule} from './clients/clients.module';
import {AdminClientsPageComponent} from './clients/components/adminClientsPage/adminClientsPage.component';
import {AuthStore} from '../../stores/auth.store';
import {MobxAngularModule} from 'mobx-angular';

const routes: Routes = [
  {
    path: 'admin', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/admin', pathMatch: 'full'},
      {path: '', component: AdminHomePageComponent, canActivate: [AuthGuard]},
      {path: 'clients', component: AdminClientsPageComponent, canActivate: [AuthGuard]},
      {path: 'deposits', component: AdminDepositsPageComponent, canActivate: [AuthGuard]},
      {path: 'deposits/:currency', component: AdminDepositsCurrencyPageComponent, canActivate: [AuthGuard]},
      {path: 'deposits/:currency/completed', component: AdminDepositsCurrencyCompletedPageComponent, canActivate: [AuthGuard]},
      {path: 'transfers', component: AdminTransfersPageComponent, canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CompleteDepositModalModule,
    ClientsModule,
    MobxAngularModule
  ],
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    NavComponent,
    AdminDepositsPageComponent,
    AdminDepositsCurrencyPageComponent,
    AdminHomePageComponent,
    AdminTransfersPageComponent,
    AdminDepositsCurrencyCompletedPageComponent
  ],
  providers: [
    AuthStore
  ]
})
export class AdminModule {
}
