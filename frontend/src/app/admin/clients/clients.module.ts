import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';

import {AdminClientsPageComponent} from './components/adminClientsPage/adminClientsPage.component';
import {ClientModalComponent} from './components/clientModal/clientModal.component';
import {ClientsService} from './services/clients.service';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {RequestClientsEffect} from './store/effects/requestClients.effect';
import {AddClientEffect} from './store/effects/addClient.effect';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {ShowClientModalComponent} from './components/showClientModal/showClientModal.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    StoreModule.forFeature('clients', reducers),
    EffectsModule.forFeature([RequestClientsEffect, AddClientEffect])
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
