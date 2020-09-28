import {Component, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {UtilsService} from '../../../../shared/services/utils.service';
import {ClientInterface} from '../../../../types/client.interface';
import {clientSelector} from '../../store/selectors';
import {showClientModalAction} from '../../store/actions/modalControl.actions';
import {FormControlService} from '../../services/formControl.service';

@Component({
  selector: 'app-show-client-modal',
  templateUrl: './showClientModal.component.html'
})
export class ShowClientModalComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Output() closeClicked = new EventEmitter();
  @HostBinding('class') classList = 'modal-wrapper';

  client$: Observable<ClientInterface>;

  constructor(
    private utils: UtilsService,
    private store: Store,
    private formControlService: FormControlService
  ) {
  }


  closeModal(): void {
    this.closeClicked.emit();
  }

  ngOnInit(): void {
    this.client$ = this.store.pipe(select(clientSelector));
  }

  updateClient(): void {
    this.formControlService.fillForm();
    const edit = true;
    this.store.dispatch(showClientModalAction({edit}));
  }
}
