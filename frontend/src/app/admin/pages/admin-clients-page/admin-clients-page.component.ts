import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-clients-page',
  templateUrl: './admin-clients-page.component.html',
  styleUrls: ['./admin-clients-page.component.scss']
})
export class AdminClientsPageComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';

  constructor() {
  }

  ngOnInit(): void {
  }

}
