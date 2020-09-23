import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {AdminClientsPageComponent} from './components/adminClientsPage/adminClientsPage.component';
import {NewClientModalComponent} from './components/newClientModal/newClientModal.component';
import {ClientsService} from './services/clients.service';
import {ClientsStore} from '../../../stores/clients.store';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AdminClientsPageComponent,
    NewClientModalComponent
  ],
  providers: [
    ClientsService,
    ClientsStore
  ]
})
export class ClientsModule{
}
