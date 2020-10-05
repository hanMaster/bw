import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {EntityDataModule} from '@ngrx/data';
import {StoreModule} from '@ngrx/store';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UtilsService} from './shared/services/utils.service';
import {AuthModule} from './auth/auth.module';
import {HttpRequestInterceptor} from './shared/services/httpRequest.interceptor';
import {environment} from '../environments/environment';
import {PersistanceService} from './shared/services/persistance.service';
import {AdminModule} from './admin/admin.module';
import {ClientModule} from './client/client.module';
import {CompaniesModule} from './shared/modules/companies/companies.module';
import {entityConfig} from './store/entity-metadata';
import {SharedModule} from './shared/modules/shared.module';
import {BeneficiaryModule} from './shared/modules/beneficiary/beneficiary.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    AuthModule,
    AdminModule,
    ClientModule,
    CompaniesModule,
    BeneficiaryModule,
    EntityDataModule.forRoot(entityConfig),
    SharedModule
  ],
  providers: [
    UtilsService,
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
