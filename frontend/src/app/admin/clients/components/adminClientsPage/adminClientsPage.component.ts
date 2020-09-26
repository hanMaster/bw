import {Component, HostBinding, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {clientsSelector, isLoadingSelector, isPopupVisibleSelector} from '../../store/selectors';
import {ClientInterface} from '../../../../types/client.interface';
import {hideClientModalAction, requestClientsAction, showClientModalAction} from '../../store/actions/requestClients.actions';

@Component({
  selector: 'app-admin-clients-page',
  templateUrl: './adminClientsPage.component.html',
  styleUrls: ['./adminClientsPage.component.scss']
})
export class AdminClientsPageComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';

  isPopupVisible$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  clients$: Observable<ClientInterface[] | null>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isPopupVisible$ = this.store.pipe(select(isPopupVisibleSelector));
    this.clients$ = this.store.pipe(select(clientsSelector));
    this.store.dispatch(requestClientsAction());
  }

  newClient(): void {
    this.store.dispatch(showClientModalAction());
  }

  hideModal(): void {
    this.store.dispatch(hideClientModalAction());
  }

}
