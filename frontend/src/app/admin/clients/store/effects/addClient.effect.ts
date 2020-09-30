import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {ClientsService} from '../../services/clients.service';
import {ClientInterface} from '../../../../types/client.interface';
import {addClientAction, addClientFailureAction, addClientSuccessAction} from '../actions/addClient.actions';
import {FormControlService} from '../../../../shared/services/formControl.service';

@Injectable()
export class AddClientEffect {
  constructor(
    private actions$: Actions,
    private clientsService: ClientsService,
    private formControlService: FormControlService
  ) {
  }

  addClient$ = createEffect(() => this.actions$.pipe(
    ofType(addClientAction),
    switchMap(({client}) => {
      return this.clientsService.addClient(client)
        .pipe(
          map((addedClient: ClientInterface) => {
            this.formControlService.clearForm();
            return addClientSuccessAction({addedClient});
          }),
          catchError((err) => {
            const errors: any[] =
              Object.keys(err.error.errors).map(item => ([err.error.errors[item][0]]));
            return of(addClientFailureAction({errors}));
          })
        );
    })
    )
  );
}
