import {Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {UtilsService} from '../../../../shared/services/utils.service';
import {ClientInterface} from '../../../../types/client.interface';
import {addClientAction} from '../../store/actions/addClient.actions';
import {ClearFormService} from '../../services/clearForm.service';
import {validationErrorsSelector} from '../../store/selectors';

@Component({
  selector: 'app-new-client-modal',
  templateUrl: './clientModal.component.html',
  styleUrls: ['./clientModal.component.scss']
})
export class ClientModalComponent implements OnInit, OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Output() closeClicked = new EventEmitter();
  @HostBinding('class') classList = 'modal-wrapper';

  form: FormGroup;
  cp = 'copy password';
  cfSub: Subscription;
  errors$: Observable<any[]>;

  constructor(
    private utils: UtilsService,
    private store: Store,
    private clearFormService: ClearFormService
  ) {
  }

  ngOnInit(): void {
    this.errors$ = this.store.pipe(select(validationErrorsSelector));
    this.cfSub = this.clearFormService.clearForm$
      .subscribe(() => {
        this.form.reset();
      });

    this.form = new FormGroup({
      clientName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^((\\+7-?)|0)?[0-9]{10}$')]),
      contactName: new FormControl('', Validators.required)
    });
  }

  closeModal(): void {
    this.closeClicked.emit();
  }

  generatePassword(): void {
    this.form.patchValue({
      password: this.utils.generatePassword(8)
    });
  }

  onSubmit(): void {
    const client: ClientInterface = {
      ...this.form.value
    };
    this.store.dispatch(addClientAction({client}));
  }

  handleCopyClick(): void {
    if (this.cp === 'copied...') {
      return;
    }
    this.cp = 'copied...';
    setTimeout(() => {
      this.cp = 'copy password';
    }, 3000);

    const text = this.form.value.password;
    this.utils.copyText(text);
  }

  ngOnDestroy(): void {
    if (this.cfSub) {
      this.cfSub.unsubscribe();
    }
  }
}
