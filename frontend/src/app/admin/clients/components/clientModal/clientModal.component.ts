import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {UtilsService} from '../../../../shared/services/utils.service';
import {Client} from '../../../../models/client';
import {ClientService} from '../../services/client.service';
import {take} from 'rxjs/operators';


@Component({
  selector: 'app-client-modal',
  templateUrl: './clientModal.component.html',
  styleUrls: ['./clientModal.component.scss']
})
export class ClientModalComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input() client: Client;
  @Output() closeClicked = new EventEmitter();
  @HostBinding('class') classList = 'modal-wrapper';

  form: FormGroup;
  cp = 'copy password';
  errors: string[];

  constructor(
    private utils: UtilsService,
    private clientService: ClientService
  ) {
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      client_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      phone_number: new FormControl('', [Validators.required, Validators.pattern('^((\\+7-?)|0)?[0-9]{10}$')]),
      contact_name: new FormControl('', Validators.required)
    });
    console.log('client', this.client);
    if (this.client && this.client.id) {
      this.form.patchValue(this.client);
      this.form.patchValue({password: '********'});
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
    if (this.client && this.client.id) {
      const client: Client = {
        id: this.client.id,
        ...this.form.value
      };
      this.clientService.update(client).pipe(take(1)).subscribe(
        () => {
          this.closeModal();
        },
        err => {
          this.handleErrors(err);
        }
      );
    } else {
      const client: Client = {
        ...this.form.value
      };
      this.clientService.add(client).pipe(take(1)).subscribe(
        () => {
          this.closeModal();
        },
        err => {
          this.handleErrors(err);
        }
      );
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

  handleErrors(err): void {
    this.errors = [];
    for (const [_, value] of Object.entries(err.error.error.errors)) {
      this.errors.push(value[0]);
    }
  }
}
