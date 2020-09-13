import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {BeneficiaryPageComponent} from './beneficiary-page/beneficiary-page.component';
import {DepositPageComponent} from './deposit-page/deposit-page.component';
import {TransferPageComponent} from './transfer-page/transfer-page.component';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {NavComponent} from './shared/components/nav/nav.component';
import {DepositCurrencyPageComponent} from './deposit-currency-page/deposit-currency-page.component';
import {DepositModalComponent} from './deposit-modal/deposit-modal.component';
import {UtilsService} from './shared/services/utils.service';
import {counterReducer} from './auth/store/reducers';
import {AuthModule} from './auth/auth.module';
import {HttpRequestInterceptor} from './shared/services/httpRequest.interceptor';
import {environment} from '../environments/environment';

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
    DepositModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(counterReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    AuthModule
  ],
  providers: [
    UtilsService,
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
