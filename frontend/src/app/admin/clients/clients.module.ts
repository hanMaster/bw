import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {IConfig, NgxMaskModule} from 'ngx-mask';

import {AdminClientsPageComponent} from './components/adminClientsPage/adminClientsPage.component';
import {AssignCompanyModalComponent} from './components/assignCompanyModal/assignCompanyModal.component';
import {ClientModalComponent} from './components/clientModal/clientModal.component';
import {ClientService} from './services/client.service';
import {ClientProfileComponent} from './components/clientProfile/clientProfile.component';
import {UserCompaniesService} from './services/userCompanies.service';
import { ClientMainPageComponent } from './components/clientMainPage/clientMainPage.component';
import {RouterModule} from '@angular/router';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    RouterModule,
  ],
  declarations: [
    AdminClientsPageComponent,
    ClientModalComponent,
    AssignCompanyModalComponent,
    ClientProfileComponent,
    ClientMainPageComponent,
  ],
  providers: [
    ClientService,
    UserCompaniesService
  ],
  exports: [
    ClientModalComponent,
    ClientProfileComponent
  ]
})
export class ClientsModule {
}
