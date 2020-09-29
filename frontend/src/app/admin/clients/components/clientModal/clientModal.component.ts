import {Component, EventEmitter, HostBinding, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {UtilsService} from '../../../../shared/services/utils.service';
import {ClientInterface} from '../../../../types/client.interface';
import {addClientAction} from '../../store/actions/addClient.actions';
import {FormControlService} from '../../services/formControl.service';
import {clientSelector, editModeSelector, validationErrorsSelector} from '../../store/selectors';
import {take} from 'rxjs/operators';
import {editClientAction} from '../../store/actions/updateClient.actions';

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
  ffSub: Subscription;
  errors$: Observable<any[]>;
  editMode$: Observable<boolean>;
  editMode = false;
  client: ClientInterface;

  constructor(
    private utils: UtilsService,
    private store: Store,
    private formControlService: FormControlService
  ) {
  }


  ngOnInit(): void {
    console.log('Modal init');
    this.errors$ = this.store.pipe(select(validationErrorsSelector));
    this.editMode$ = this.store.pipe(select(editModeSelector));
    this.store.pipe(select(editModeSelector), take(1)).subscribe(
      editMode => {
        this.editMode = editMode;
      }
    );

    this.cfSub = this.formControlService.clearForm$
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

    if(this.editMode){
      this.store.pipe(select(clientSelector), take(1)).subscribe(
        (client: ClientInterface) => {
          this.client = client;
        }
      );
      this.form.patchValue({clientName: this.client.client_name});
      this.form.patchValue({phoneNumber: this.client.phone_number});
      this.form.patchValue({email: this.client.email});
      this.form.patchValue({password: '********'});
      this.form.patchValue({contactName: this.client.contact_name});
    }
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
    if (this.editMode) {
      const client: ClientInterface = {
        id: this.client.id,
        ...this.form.value
      };
      this.store.dispatch(editClientAction({client}));
    } else {
      const client: ClientInterface = {
        ...this.form.value
      };
      this.store.dispatch(addClientAction({client}));
    }
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
    console.log('Destroy modal');
    if (this.cfSub) {
      this.cfSub.unsubscribe();
    }
    if (this.ffSub) {
      this.ffSub.unsubscribe();
    }
  }
}
