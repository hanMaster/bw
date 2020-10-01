import {Component, HostBinding, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CurrentUser} from '../../../models/currentUser';
import {currentUserSelector, isAnonymousSelector, isLoggedInSelector} from '../../../auth/store/selectors';
import {logoutAction} from '../../../auth/store/actions/logout.actions';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') classList = 'header logged-header';

  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<CurrentUser | null>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

  logout(): void {
    this.store.dispatch(logoutAction());
  }
}
