import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './services/auth.service';
import {ReactiveFormsModule} from '@angular/forms';
import {reducers} from './store/reducers';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {LoginEffect} from './store/effects/login.effect';
import {LogoutEffect} from './store/effects/logout.effect';
import {GetCurrentUserEffect} from './store/effects/getCurrentUser.effect';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([LoginEffect, LogoutEffect, GetCurrentUserEffect]),
  ],
  declarations: [LoginComponent],
  providers: [AuthService]
})

export class AuthModule {
}
