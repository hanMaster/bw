import {Component, HostBinding, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CurrentUserInterface} from '../../../types/currentUser.interface';
import {currentUserSelector} from '../../../auth/store/selectors';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'aside',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @HostBinding('class') classList = 'main-nav';
  currentUser$: Observable<CurrentUserInterface | null>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

}
