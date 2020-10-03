import {Component, HostBinding, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {RussBankService} from '../../russBank.service';
import {RussBank} from '../../../../../models/russBank';

@Component({
  selector: 'app-banks-list',
  templateUrl: './banks-list.component.html',
  styleUrls: ['./banks-list.component.scss']
})
export class BanksListComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';
  loading$: Observable<boolean>;
  banks$: Observable<RussBank[]>;
  selected: RussBank;

  constructor(private russBankService: RussBankService) {
    this.loading$ = this.russBankService.loading$;
    this.banks$ = this.russBankService.entities$;
  }

  ngOnInit(): void {
    this.russBankService.getAll();
  }

  hideModal(): void {
    this.selected = null;
  }

  showModal(bank: RussBank): void {
    this.selected = bank;
  }

  enableAddMode(): void {
    this.selected = <any> {};
  }
}
