import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {IConfig, NgxMaskModule} from 'ngx-mask';

import {AdminClientsPageComponent} from './components/adminClientsPage/adminClientsPage.component';
import {ShowClientModalComponent} from './components/showClientModal/showClientModal.component';
import {ClientModalComponent} from './components/clientModal/clientModal.component';
import {ClientsService} from './services/clients.service';
import {RequestClientsEffect} from './store/effects/requestClients.effect';
import {UpdateClientEffect} from './store/effects/updateClient.effect';
import {AddClientEffect} from './store/effects/addClient.effect';
import {reducers} from './store/reducers';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    StoreModule.forFeature('clients', reducers),
    EffectsModule.forFeature([RequestClientsEffect, AddClientEffect, UpdateClientEffect])
  ],
  declarations: [
    AdminClientsPageComponent,
    ClientModalComponent,
    ShowClientModalComponent
  ],
  providers: [
    ClientsService
  ],
  exports: [
    ClientModalComponent
  ]
})
export class ClientsModule {
}
