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
import {ForeignCompaniesModule} from '../shared/modules/foreignCompanies/foreignCompanies.module';
import {ForeignCompaniesListComponent} from '../shared/modules/foreignCompanies/components/foreignCompaniesList/foreignCompaniesList.component';
import {ForeignCompanyProfileComponent} from '../shared/modules/foreignCompanies/components/foreignCompanyProfile/foreignCompanyProfile.component';
import {AdminTransfersArchivedPageComponent} from './pages/adminTransfersArchivedPage/adminTransfersArchivedPage.component';
import {ClientMainPageComponent} from './clients/components/clientMainPage/clientMainPage.component';
import {AdminDepositsCurrencyPageModule} from './pages/adminDepositsCurrencyPage/adminDepositsCurrencyPage.module';

const routes: Routes = [
  {
    path: 'admin', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/admin', pathMatch: 'full'},
      {path: '', component: AdminHomePageComponent, canActivate: [AuthGuard]},
      {path: 'clients', component: AdminClientsPageComponent, canActivate: [AuthGuard]},
      {path: 'clients/:clientId', component: ClientMainPageComponent, canActivate: [AuthGuard]},
      {path: 'client-profile/:clientId', component: ClientProfileComponent, canActivate: [AuthGuard]},
      {path: 'companies', component: CompaniesListComponent, canActivate: [AuthGuard]},
      {path: 'company-profile/:companyId', component: CompanyProfileComponent, canActivate: [AuthGuard] },
      {path: 'foreign-companies', component: ForeignCompaniesListComponent, canActivate: [AuthGuard]},
      {path: 'foreign-company-profile/:companyId', component: ForeignCompanyProfileComponent, canActivate: [AuthGuard] },
      {path: 'deposits', component: AdminDepositsPageComponent, canActivate: [AuthGuard]},
      {path: 'deposits/:currency', component: AdminDepositsCurrencyPageComponent, canActivate: [AuthGuard]},
      {path: 'deposits/:currency/completed', component: AdminDepositsCurrencyCompletedPageComponent, canActivate: [AuthGuard]},
      {path: 'deposits/:currency/:clientId', component: AdminDepositsCurrencyPageComponent, canActivate: [AuthGuard]},
      {path: 'deposits/:currency/:clientId/completed', component: AdminDepositsCurrencyCompletedPageComponent, canActivate: [AuthGuard]},
      {path: 'transfers', component: AdminTransfersPageComponent, canActivate: [AuthGuard]},
      {path: 'transfers/archived', component: AdminTransfersArchivedPageComponent, canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CompleteDepositModalModule,
    ClientsModule,
    ForeignCompaniesModule,
    AdminDepositsCurrencyPageModule
  ],
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    NavComponent,
    AdminDepositsPageComponent,
    AdminHomePageComponent,
    AdminTransfersPageComponent,
    AdminTransfersArchivedPageComponent,
    AdminDepositsCurrencyCompletedPageComponent
  ]
})
export class AdminModule {
}
