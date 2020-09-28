import {Component, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {UtilsService} from '../../../../shared/services/utils.service';
import {ClientInterface} from '../../../../types/client.interface';
import {clientSelector} from '../../store/selectors';

@Component({
  selector: 'app-show-client-modal',
  templateUrl: './showClientModal.component.html'
})
export class ShowClientModalComponent implements OnInit{

  // tslint:disable-next-line:no-input-rename
  @Output() closeClicked = new EventEmitter();
  @HostBinding('class') classList = 'modal-wrapper';

  client$: Observable<ClientInterface>;

  constructor(
    private utils: UtilsService,
    private store: Store
    ) {
  }


  closeModal(): void {
    this.closeClicked.emit();
  }

  ngOnInit(): void {
    this.client$ = this.store.pipe(select(clientSelector));
  }
}
