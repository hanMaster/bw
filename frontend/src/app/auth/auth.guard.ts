import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {isLoggedInSelector} from './store/selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let allow = false;
    this.store.pipe(select(isLoggedInSelector)).subscribe((value: boolean) => {
      allow = value;
    });
    if (allow === null || allow) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          auth: false
        }
      });
    }
  }

}
