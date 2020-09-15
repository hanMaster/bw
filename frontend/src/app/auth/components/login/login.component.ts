import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AuthRequestInterface} from '../../types/authRequest.interface';
import {loginAction} from '../../store/actions/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    const request: AuthRequestInterface = {
      ...this.form.value
    };
    this.store.dispatch(loginAction({request}));
  }

  getUser(): void {
    // this.authService.getUser();
  }

  logout(): void {
    // this.authService.logout();
  }
}
