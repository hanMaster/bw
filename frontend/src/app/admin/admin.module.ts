import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminHomePageComponent} from './pages/adminHomePage/adminHomePage.component';
import {AuthGuard} from '../auth/auth.guard';
import {AdminDepositsPageComponent} from './pages/adminDepositsPage/adminDepositsPage.component';
import {AdminDepositsCurrencyPageComponent} from './pages/adminDepositsCurrencyPage/components/adminDepositsCurrencyPage/adminDepositsCurrencyPage.component';
import {AdminDepositsCurrencyCompletedPageComponent} from './pages/adminDepositsCurrencyCompletedPage/adminDepositCurrencyCompletedPage.component';
import {AdminTransfersPageComponent} from './pages/adminTransfersPage/adminTransfersPage.component';
import {CompleteDepositModalModule} from './completeDepositModal/completeDepositModal.module';
import {MainLayoutComponent} from '../shared/components/mainLayout/mainLayout.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import {NavComponent} from '../shared/components/nav/nav.component';
import {ClientsModule} from './clients/clients.module';
import {AdminClientsPageComponent} from './clients/components/adminClientsPage/adminClientsPage.component';
import {CompaniesListComponent} from '../shared/modules/companies/components/companiesList/companiesList.component';
import {ClientProfileComponent} from './clients/components/clientProfile/clientProfile.component';
import {CompanyProfileComponent} from '../shared/modules/companies/components/companyProfile/companyProfile.component';

const routes: Routes = [
  {
    path: 'admin', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/admin', pathMatch: 'full'},
      {path: '', component: AdminHomePageComponent, canActivate: [AuthGuard]},
      {path: 'clients', component: AdminClientsPageComponent, canActivate: [AuthGuard]},
      {path: 'client-profile/:clientId', component: ClientProfileComponent, canActivate: [AuthGuard]},
      {path: 'companies', component: CompaniesListComponent, canActivate: [AuthGuard]},
      {path: 'company-profile/:companyId', component: CompanyProfileComponent, canActivate: [AuthGuard] },
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
    ClientsModule
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
  ]
})
export class AdminModule {
}
