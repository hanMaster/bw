import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {getCurrentUserActions} from './auth/store/actions/getCurrentUser.actions';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{

  constructor(private store: Store) {
  }
  ngOnInit(): void {
    this.store.dispatch(getCurrentUserActions());
  }
}
