import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {ClientsService} from '../../services/clients.service';
import {ClientInterface} from '../../../../types/client.interface';
import {FormControlService} from '../../../../shared/services/formControl.service';
import {editClientAction, editClientFailureAction, editClientSuccessAction} from '../actions/updateClient.actions';

@Injectable()
export class UpdateClientEffect {
  constructor(
    private actions$: Actions,
    private clientsService: ClientsService,
    private formControlService: FormControlService
  ) {
  }

  updateClient$ = createEffect(() => this.actions$.pipe(
    ofType(editClientAction),
    switchMap(({client}) => {
      return this.clientsService.updateClient(client)
        .pipe(
          map((updatedClient: ClientInterface) => {
            this.formControlService.clearForm();
            return editClientSuccessAction({updatedClient});
          }),
          catchError((err) => {
            const errors: any[] =
              Object.keys(err.error.errors).map(item => ([err.error.errors[item][0]]));
            return of(editClientFailureAction({errors}));
          })
        );
    })
    )
  );
}
