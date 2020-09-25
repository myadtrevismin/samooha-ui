import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthorizationService } from '../../app/_services/authorize/authorization.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authorization: AuthorizationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if ([401, 403].includes(err.status) && this.authorization.userValue) {
          this.authorization.logout();
      }

      const error = (err && err.error && err.error.message) || err.statusText;
      console.error(err);
      return throwError(error);
  }));
  }
}
