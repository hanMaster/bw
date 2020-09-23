import {Component, HostBinding} from '@angular/core';
import {AuthStore} from '../../../../stores/auth.store';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'aside',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @HostBinding('class') classList = 'main-nav';

  constructor(public store: AuthStore) {
  }

}
