import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {ClientsService} from '../../services/clients.service';
import {ClientInterface} from '../../../../types/client.interface';
import {requestClientsAction, requestClientsFailureAction, requestClientsSuccessAction} from '../actions/requestClients.actions';

@Injectable()
export class RequestClientsEffect {
  constructor(
    private actions$: Actions,
    private clientsService: ClientsService
  ) {
  }

  requestClients$ = createEffect(() => this.actions$.pipe(
    ofType(requestClientsAction),
    switchMap(() => {
      return this.clientsService.getClients()
        .pipe(
          map((clients: ClientInterface[]) => {
            return requestClientsSuccessAction({clients});
          }),
          catchError(() => {
            return of(requestClientsFailureAction());
          })
        );
    })
    )
  );
}
