import {Component, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {companySelector} from '../../store/selectors';
import {showCompanyModalAction} from '../../store/actions/modalControl.actions';
import {RussCompanyInterface} from '../../../../../types/russCompany.interface';

@Component({
  selector: 'app-show-company-modal',
  templateUrl: './showCompanyModal.component.html'
})
export class ShowCompanyModalComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Output() closeClicked = new EventEmitter();
  @HostBinding('class') classList = 'modal-wrapper';

  company$: Observable<RussCompanyInterface>;

  constructor(
    private store: Store
  ) {
  }


  closeModal(): void {
    this.closeClicked.emit();
  }

  ngOnInit(): void {
    this.company$ = this.store.pipe(select(companySelector));
  }

  updateCompany(): void {
    const edit = true;
    this.store.dispatch(showCompanyModalAction({edit}));
  }
}
