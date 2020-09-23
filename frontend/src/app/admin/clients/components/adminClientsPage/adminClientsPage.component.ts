import {Component, HostBinding, OnInit} from '@angular/core';
import {ClientsStore} from '../../../../../stores/clients.store';


@Component({
  selector: 'app-admin-clients-page',
  templateUrl: './adminClientsPage.component.html',
  styleUrls: ['./adminClientsPage.component.scss']
})
export class AdminClientsPageComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';

  isPopupVisible = false;

  constructor(public store: ClientsStore) {
  }

  ngOnInit(): void {
    this.store.getClients();
  }

  newClient(): void {
    this.isPopupVisible = true;
  }

  hideModal(): void {
    this.isPopupVisible = false;
  }

}
