import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BanksListComponent} from './components/banks-list/banks-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BanksListComponent
  ],
  exports: [
    BanksListComponent
  ]
})

export class BanksModule{

}
