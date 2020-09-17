import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {logoutAction, logoutFailureAction, logoutSuccessAction} from '../actions/logout.actions';
import {PersistanceService} from '../../../shared/services/persistance.service';

@Injectable()
export class LogoutEffect {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private persistanceService: PersistanceService
  ) {
  }

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logoutAction),
    switchMap(() => {
      return this.authService.logout()
        .pipe(
          map(() => {
            this.persistanceService.clear('auth');
            return logoutSuccessAction();
          }),
          catchError(() => {
            return of(logoutFailureAction());
          })
        );
    })
  ));

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
    ofType(logoutSuccessAction),
    tap(() => {
      this.router.navigate(['/login']);
    })
  ), {dispatch: false});

}
