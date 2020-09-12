import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpXsrfTokenExtractor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private tokenExtractor: HttpXsrfTokenExtractor) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('https://cors-anywhere.herokuapp.com/')) {
      return next.handle(request);
    } else {

      const token = this.tokenExtractor.getToken() as string;
      console.log('token', token);

      if (token) {
        const authRequest = request.clone({
            setHeaders: {
              'X-XSRF-TOKEN': token
            },
            withCredentials: true
          }
        );
        return next.handle(authRequest);
      } else {
        const authRequest = request.clone({
            withCredentials: true
          }
        );
        return next.handle(authRequest);

      }

    }
  }
}
