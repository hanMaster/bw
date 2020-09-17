import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './client/pages/home-page/home-page.component';
import {BeneficiaryPageComponent} from './client/pages/beneficiary-page/beneficiary-page.component';
import {DepositPageComponent} from './client/pages/deposit-page/deposit-page.component';
import {TransferPageComponent} from './client/pages/transfer-page/transfer-page.component';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {NavComponent} from './shared/components/nav/nav.component';
import {DepositCurrencyPageComponent} from './client/pages/deposit-currency-page/deposit-currency-page.component';
import {DepositModalComponent} from './client/deposit-modal/deposit-modal.component';
import {UtilsService} from './shared/services/utils.service';
import {AuthModule} from './auth/auth.module';
import {HttpRequestInterceptor} from './shared/services/httpRequest.interceptor';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {PersistanceService} from './shared/services/persistance.service';
import { AdminHomePageComponent } from './admin/pages/admin-home-page/admin-home-page.component';
import { AdminClientsPageComponent } from './admin/pages/admin-clients-page/admin-clients-page.component';
import { AdminDepositsPageComponent } from './admin/pages/admin-deposits-page/admin-deposits-page.component';
import { AdminTransfersPageComponent } from './admin/pages/admin-transfers-page/admin-transfers-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BeneficiaryPageComponent,
    DepositPageComponent,
    TransferPageComponent,
    MainLayoutComponent,
    HeaderComponent,
    NavComponent,
    DepositCurrencyPageComponent,
    DepositModalComponent,
    AdminHomePageComponent,
    AdminClientsPageComponent,
    AdminDepositsPageComponent,
    AdminTransfersPageComponent
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
    AuthModule
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
