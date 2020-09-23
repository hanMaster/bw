import {Injectable} from '@angular/core';
import {action, observable} from 'mobx-angular';
import {Router} from '@angular/router';
import {take} from 'rxjs/operators';

import {CurrentUserInterface} from '../app/types/currentUser.interface';
import {BackendErrorsInterface} from '../app/types/backendErrors.interface';
import {AuthService} from '../app/auth/services/auth.service';
import {PersistanceService} from '../app/shared/services/persistance.service';
import {AuthRequestInterface} from '../app/auth/types/authRequest.interface';

@Injectable()
export class AuthStore {
  @observable isSubmitting: boolean;
  @observable isLoading: boolean;
  @observable currentUser: CurrentUserInterface | null;
  @observable isLoggedIn: boolean | null;
  @observable validationErrors: BackendErrorsInterface | null;
  private auth: boolean;

  constructor(
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {
    this.isLoggedIn = null;
  }

  @action getCurrentUser(): void {
    this.auth = this.persistanceService.get('auth');
    console.log('auth', this.auth);
    if (this.auth) {
      this.authService.getCurrentUser().pipe(take(1)).subscribe(
        (currentUser: CurrentUserInterface) => {
          this.currentUser = currentUser;
          this.isLoggedIn = true;
        },
        error => {
          this.logout();
        }
      );
    } else {
      this.persistanceService.clear('auth');
      this.router.navigate(['/login']);
    }
  }

  @action login(credentials: AuthRequestInterface): void {
    this.authService.login(credentials).pipe(take(1)).subscribe(
      (user: CurrentUserInterface) => {
        this.persistanceService.set('auth', 'true');
        this.currentUser = user;
        this.isLoggedIn = true;
        const path = user.role === 'admin' ? '/admin' : '/';
        console.log('PATH', path);
        this.router.navigate([path]);
      }
    );
  }

  @action logout(): void {
    this.authService.logout().pipe(take(1)).subscribe(
      () => {
        this.persistanceService.clear('auth');
        this.currentUser = null;
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
      }
    );
  }

}
