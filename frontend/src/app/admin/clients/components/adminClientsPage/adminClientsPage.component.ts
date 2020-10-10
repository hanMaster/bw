import {Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

import {Client} from '../../../../models/client';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-admin-clients-page',
  templateUrl: './adminClientsPage.component.html',
  styleUrls: ['./adminClientsPage.component.scss']
})
export class AdminClientsPageComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';

  isLoading$: Observable<boolean>;
  clients$: Observable<Client[]>;
  modalVisible = false;

  constructor(
    private clientService: ClientService,
    private router: Router
  ) {
    this.clients$ = this.clientService.entities$;
    this.isLoading$ = this.clientService.loading$;
  }

  ngOnInit(): void {
    this.clients$ = this.clientService.getAll();
  }

  newClient(): void {
    this.modalVisible = true;
  }

  hideModal(): void {
    this.modalVisible = false;
  }

  viewClient(client: Client): void {
    this.router.navigate(['/admin', 'clients', client.id]);
  }

}
