import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';


import {AuthService} from '../../services/auth.service';
import {CurrentUserInterface} from '../../../types/currentUser.interface';
import {PersistanceService} from '../../../shared/services/persistance.service';
import {getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction} from '../actions/getCurrentUser.action';

@Injectable()
export class GetCurrentUserEffect {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {
  }

  getCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(getCurrentUserAction),
    switchMap(() => {
      const token = this.persistanceService.get('auth');
      if (!token) {
        return of(getCurrentUserFailureAction());
      }
      return this.authService.getCurrentUser()
        .pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({currentUser});
          }),
          catchError(() => {
            return of(getCurrentUserFailureAction());
          })
        );
    })
  ));

}
