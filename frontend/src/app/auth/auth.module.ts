import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './services/auth.service';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AuthStore} from '../../stores/auth.store';
import {MobxAngularModule} from 'mobx-angular';

const routes: Routes = [
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MobxAngularModule
  ],
  declarations: [LoginComponent],
  providers: [
    AuthService,
    AuthStore
  ]
})

export class AuthModule {
}
