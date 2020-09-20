import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminDepositsCurrencyPageComponent} from './components/adminDepositsCurrencyPage/adminDepositsCurrencyPage.component';
import {CompleteDepositModalModule} from '../../completeDepositModal/completeDepositModal.module';
import {RouterModule} from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    CompleteDepositModalModule,
    RouterModule
  ],
  declarations: [AdminDepositsCurrencyPageComponent],
  exports: [AdminDepositsCurrencyPageComponent]
})
export class AdminDepositsCurrencyPageModule {
}
