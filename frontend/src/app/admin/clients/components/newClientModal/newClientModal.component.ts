import {Component, HostBinding, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UtilsService} from '../../../../shared/services/utils.service';

@Component({
  selector: 'app-new-client-modal',
  templateUrl: './newClientModal.component.html',
  styleUrls: ['./newClientModal.component.scss']
})
export class NewClientModalComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('currency') currencyProp: string;

  @Output() closeClicked = new EventEmitter();

  @HostBinding('class') classList = 'modal-wrapper';

  form: FormGroup;
  cp = 'copy password';

  constructor(private utils: UtilsService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      clientName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
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
    console.log(this.form.value);
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
    navigator.clipboard.writeText(text).then(() => {
      console.log('Async: Copying to clipboard was successful!');
    }, (err) => {
      console.error('Async: Could not copy text: ', err);
    });
  }
}
