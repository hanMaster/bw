import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {ClientService} from '../../services/client.service';
import {Client} from '../../../../models/client';

@Component({
  selector: 'app-client-main-page',
  templateUrl: './clientMainPage.component.html',
  styleUrls: ['./clientMainPage.component.scss']
})
export class ClientMainPageComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';
  clientId: number;
  client$: Observable<Client>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.clientId = param.clientId;
    });

    this.client$ = this.clientService.getByKey(this.clientId);
  }

}
