import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from '@angular/core';
import {AuthStore} from '../../../../stores/auth.store';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') classList = 'header logged-header';

  constructor(public store: AuthStore) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.store.logout();
  }
}
