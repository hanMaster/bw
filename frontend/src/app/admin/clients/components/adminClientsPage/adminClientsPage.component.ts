import {Component, HostBinding, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {clientsSelector, isLoadingSelector} from '../../store/selectors';
import {ClientInterface} from '../../../../types/client.interface';
import {requestClientsAction} from '../../store/actions/requestClients.actions';

@Component({
  selector: 'app-admin-clients-page',
  templateUrl: './adminClientsPage.component.html',
  styleUrls: ['./adminClientsPage.component.scss']
})
export class AdminClientsPageComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';

  isPopupVisible = false;
  isLoading$: Observable<boolean>;
  clients$: Observable<ClientInterface[] | null>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.clients$ = this.store.pipe(select(clientsSelector));
    this.store.dispatch(requestClientsAction());
  }

  newClient(): void {
    this.isPopupVisible = true;
  }

  hideModal(): void {
    this.isPopupVisible = false;
  }

}
