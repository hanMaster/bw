import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {loginAction, loginFailureAction, loginSuccessAction} from '../actions/login.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {CurrentUserInterface} from '../../../types/currentUser.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';

@Injectable()
export class LoginEffect {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {
  }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    switchMap(({request}) => {
      return this.authService.login(request)
        .pipe(
          map((currentUser: CurrentUserInterface) => {
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
      this.router.navigate(['/']);
    })
  ), {dispatch: false});

}
