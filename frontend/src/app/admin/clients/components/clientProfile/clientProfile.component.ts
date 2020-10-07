import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ClientService} from '../../services/client.service';
import {Observable} from 'rxjs';
import {RussCompany} from '../../../../models/russCompany';
import {Client} from '../../../../models/client';
import {ForeignCompany} from '../../../../models/foreignCompany';

@Component({
  selector: 'app-client-profile',
  templateUrl: './clientProfile.component.html'
})
export class ClientProfileComponent implements OnInit {
  @HostBinding('class') classList = 'main-content';

  clientId: number;
  client$: Observable<Client>;
  RusForCompanies = 'rus';
  clientModalVisible = false;
  companiesModalVisible = false;
  selected: RussCompany | ForeignCompany = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.clientId = param.clientId;
    });

    this.client$ = this.clientService.getByKey(this.clientId);
  }

  goBack(): void {
    this.location.back();
  }

  updateClient(): void {
    this.clientModalVisible = true;
  }

  addCompany(): void {
    this.companiesModalVisible = true;
  }

  editCompany(company: RussCompany | ForeignCompany): void {
    this.companiesModalVisible = true;
    this.selected = company;
  }

  hideClientModal(): void {
    this.clientModalVisible = false;
    this.client$ = this.clientService.getByKey(this.clientId);
  }

  hideAssignCompanyModal(): void {
    this.companiesModalVisible = false;
    this.client$ = this.clientService.getByKey(this.clientId);
  }
}
