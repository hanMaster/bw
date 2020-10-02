import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {AuthRequestInterface} from '../../types/authRequest.interface';
import {loginActions} from '../../store/actions/login.actions';
import {Observable} from 'rxjs';
import {validationErrorsSelector} from '../../store/selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  errors$: Observable<string | null>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.errors$ = this.store.pipe(select(validationErrorsSelector));
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    const request: AuthRequestInterface = {
      ...this.form.value
    };
    this.store.dispatch(loginActions({request}));
  }

}
