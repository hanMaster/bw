import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('https://cors-anywhere.herokuapp.com/')) {
      return next.handle(request);
    }
    const authRequest = request.clone({
        withCredentials: true
      }
    );
    return next.handle(authRequest);
  }
}
