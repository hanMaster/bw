import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {loginActions, loginFailureAction, loginSuccessAction} from '../actions/login.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {CurrentUserInterface} from '../../../types/currentUser.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {PersistanceService} from '../../../shared/services/persistance.service';

@Injectable()
export class LoginEffect {

  role: string;

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private persistanceService: PersistanceService
  ) {
  }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginActions),
    switchMap(({request}) => {
      return this.authService.login(request)
        .pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('auth', 'true');
            this.role = currentUser.role;
            return loginSuccessAction({currentUser});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(loginFailureAction({errors: errorResponse.error.errors}));
          })
        );
    })
  ));

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccessAction),
    tap(() => {
      const path = this.role === 'client' ? '/' : '/admin';
      this.router.navigate([path]);
    })
  ), {dispatch: false});

}
