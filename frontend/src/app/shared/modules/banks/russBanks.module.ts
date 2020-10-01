import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BanksListComponent} from './components/banks-list/banks-list.component';
import {BankModalComponent} from './components/bankModal/bankModal.component';
import {SharedModule} from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    BanksListComponent,
    BankModalComponent
  ],
  exports: [
    BanksListComponent
  ]
})

export class RussBanksModule{

}
