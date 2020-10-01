import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {take} from 'rxjs/operators';

import {RussBank} from '../../../../../models/russBank';
import {RussBankService} from '../../russBank.service';


@Component({
  selector: 'app-bank-modal',
  templateUrl: './bankModal.component.html',
  styleUrls: ['./bankModal.component.scss']
})
export class BankModalComponent implements OnInit {

  @Input('bank') bankProp: RussBank;

  @Output() closeClicked = new EventEmitter();

  @HostBinding('class') classList = 'modal-wrapper';

  form: FormGroup;
  errors: string[];
  editMode = false;

  constructor(private russBankService: RussBankService) {
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      bank_name: new FormControl('', Validators.required),
      bic_code: new FormControl('', [
        Validators.required,
        Validators.maxLength(9),
        Validators.minLength(9)
      ]),
      corr_account: new FormControl('', Validators.required),
    });

    this.editMode = !!(this.bankProp && this.bankProp.id);

    if (this.editMode) {
      this.form.patchValue(this.bankProp);
    }

  }

  closeModal(): void {
    this.closeClicked.emit();
  }

  handleErrors(err): void {
    this.errors = [];
    for (const [_, value] of Object.entries(err.error.error.errors)) {
      this.errors.push(value[0]);
    }
  }

  onSubmit(): void {
    if (this.editMode) {
      const bank: RussBank = {
        id: this.bankProp.id,
        ...this.form.value
      };
      this.russBankService.update(bank).pipe(take(1)).subscribe(
        () => {
          this.closeModal();
        },
        err => {
          this.handleErrors(err);
        }
      );

    } else {
      const bank: RussBank = {
        ...this.form.value,
      };
      this.russBankService.add(bank).pipe(take(1)).subscribe(
        () => {
          this.closeModal();
        },
        err => {
          this.handleErrors(err);
        }
      );
    }

  }
}
