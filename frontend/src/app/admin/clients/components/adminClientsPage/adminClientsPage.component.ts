import {Component, HostBinding, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {
  clientsSelector,
  isLoadingSelector,
  isPopupVisibleSelector,
  isShowPopupVisibleSelector
} from '../../store/selectors';
import {ClientInterface} from '../../../../types/client.interface';
import {requestClientsAction} from '../../store/actions/requestClients.actions';
import {
  hideClientModalAction,
  hideViewClientModalAction,
  showClientModalAction, showViewClientModalAction
} from '../../store/actions/modalControl.actions';

@Component({
  selector: 'app-admin-clients-page',
  templateUrl: './adminClientsPage.component.html',
  styleUrls: ['./adminClientsPage.component.scss']
})
export class AdminClientsPageComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';

  isPopupVisible$: Observable<boolean>;
  isShowPopupVisible$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  clients$: Observable<ClientInterface[] | null>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isPopupVisible$ = this.store.pipe(select(isPopupVisibleSelector));
    this.isShowPopupVisible$ = this.store.pipe(select(isShowPopupVisibleSelector));
    this.clients$ = this.store.pipe(select(clientsSelector));
    this.store.dispatch(requestClientsAction());
  }

  newClient(): void {
    this.store.dispatch(showClientModalAction());
  }

  hideModal(): void {
    this.store.dispatch(hideClientModalAction());
  }

  viewClient(id: number): void {
    this.store.dispatch(showViewClientModalAction({id}));
  }

  hideShowClientModal(): void {
    this.store.dispatch(hideViewClientModalAction());
  }
}
