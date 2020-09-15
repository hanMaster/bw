import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './services/auth.service';
import {ReactiveFormsModule} from '@angular/forms';
import {reducers} from './store/reducers';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {LoginEffect} from './store/effects/login.effect';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([LoginEffect]),
  ],
  declarations: [LoginComponent],
  providers: [AuthService]
})

export class AuthModule {
}
