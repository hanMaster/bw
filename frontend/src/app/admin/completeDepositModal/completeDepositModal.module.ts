import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompleteDepositModalComponent} from './components/CompleteDepositModal/completeDepositModal.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CompleteDepositModalComponent],
  exports: [CompleteDepositModalComponent]
})
export class CompleteDepositModalModule {
}
