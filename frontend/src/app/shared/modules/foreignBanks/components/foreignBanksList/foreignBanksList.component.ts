import {Component, HostBinding, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {ForeignBankService} from '../../foreignBank.service';
import {ForeignBank} from '../../../../../models/foreignBank';

@Component({
  selector: 'app-foreign-banks-list',
  templateUrl: './foreignBanksList.component.html',
  styleUrls: ['./foreignBanksList.component.scss']
})
export class ForeignBanksListComponent implements OnInit {

  @HostBinding('class') classList = 'main-content';
  loading$: Observable<boolean>;
  banks$: Observable<ForeignBank[]>;
  selected: ForeignBank;

  constructor(private bankService: ForeignBankService) {
    this.loading$ = this.bankService.loading$;
    this.banks$ = this.bankService.entities$;
  }

  ngOnInit(): void {
    this.bankService.getAll();
  }

  hideModal(): void {
    this.selected = null;
  }

  showModal(bank: ForeignBank): void {
    this.selected = bank;
  }

  enableAddMode(): void {
    this.selected = <any> {};
  }
}
