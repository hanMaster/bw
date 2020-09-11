import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './services/auth.service';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [LoginComponent],
  providers: [AuthService]
})

export class AuthModule{
}
