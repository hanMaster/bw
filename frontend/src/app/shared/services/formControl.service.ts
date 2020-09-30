import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {
  private clearFormSource = new Subject<boolean>();
  private fillFormSource = new Subject<boolean>();

  clearForm$ = this.clearFormSource.asObservable();
  fillForm$ = this.fillFormSource.asObservable();

  clearForm(): void {
    this.clearFormSource.next(true);
  }

  fillForm(): void {
    this.fillFormSource.next(true);
  }
}
