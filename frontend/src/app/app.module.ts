import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/components/login/login.component';
import {HomePageComponent} from './home-page/home-page.component';
import {BeneficiaryPageComponent} from './beneficiary-page/beneficiary-page.component';
import {DepositPageComponent} from './deposit-page/deposit-page.component';
import {TransferPageComponent} from './transfer-page/transfer-page.component';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {NavComponent} from './shared/components/nav/nav.component';
import {DepositCurrencyPageComponent} from './deposit-currency-page/deposit-currency-page.component';
import {DepositModalComponent} from './deposit-modal/deposit-modal.component';
import {HttpClientModule} from '@angular/common/http';
import {UtilsService} from './shared/services/utils.service';
import {RatesService} from './services/rates.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    HttpClientModule
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
