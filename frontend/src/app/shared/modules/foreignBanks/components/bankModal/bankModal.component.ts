import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {take} from 'rxjs/operators';

import {ForeignBankService} from '../../foreignBank.service';
import {ForeignBank} from '../../../../../models/foreignBank';


@Component({
  selector: 'app-bank-modal',
  templateUrl: './bankModal.component.html',
  styleUrls: ['./bankModal.component.scss']
})
export class BankModalComponent implements OnInit {

  @Input() bank: ForeignBank;

  @Output() closeClicked = new EventEmitter();

  @HostBinding('class') classList = 'modal-wrapper';

  form: FormGroup;
  errors: string[];
  editMode = false;

  constructor(private bankService: ForeignBankService) {
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      bank_name: new FormControl('', Validators.required),
      swift_code: new FormControl('', [
        Validators.required,
        Validators.maxLength(9),
        Validators.minLength(9)
      ]),
      bank_address: new FormControl('', Validators.required),
    });

    this.editMode = !!(this.bank && this.bank.id);

    if (this.editMode) {
      this.form.patchValue(this.bank);
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
      const bank: ForeignBank = {
        id: this.bank.id,
        ...this.form.value
      };
      this.bankService.update(bank).pipe(take(1)).subscribe(
        () => {
          this.closeModal();
        },
        err => {
          this.handleErrors(err);
        }
      );

    } else {
      const bank: ForeignBank = {
        ...this.form.value,
      };
      this.bankService.add(bank).pipe(take(1)).subscribe(
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
