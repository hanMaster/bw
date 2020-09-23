import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UtilsService} from './shared/services/utils.service';
import {AuthModule} from './auth/auth.module';
import {HttpRequestInterceptor} from './shared/services/httpRequest.interceptor';
import {PersistanceService} from './shared/services/persistance.service';
import {AdminModule} from './admin/admin.module';
import {ClientModule} from './client/client.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    AdminModule,
    ClientModule
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
