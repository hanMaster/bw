import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';

import {AdminClientsPageComponent} from './components/adminClientsPage/adminClientsPage.component';
import {NewClientModalComponent} from './components/newClientModal/newClientModal.component';
import {ClientsService} from './services/clients.service';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {RequestClientsEffect} from './store/effects/requestClients.effect';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('clients', reducers),
    EffectsModule.forFeature([RequestClientsEffect])
  ],
  declarations: [
    AdminClientsPageComponent,
    NewClientModalComponent
  ],
  providers: [
    ClientsService
  ]
})
export class ClientsModule{
}
