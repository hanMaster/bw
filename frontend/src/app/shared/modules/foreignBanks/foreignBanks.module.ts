import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForeignBanksListComponent} from './components/foreignBanksList/foreignBanksList.component';
import {BankModalComponent} from './components/bankModal/bankModal.component';
import {SharedModule} from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ForeignBanksListComponent,
    BankModalComponent
  ],
  exports: [
    ForeignBanksListComponent
  ]
})

export class ForeignBanksModule{

}
