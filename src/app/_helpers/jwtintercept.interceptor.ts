import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../../app/_services/authorize/authorization.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtinterceptInterceptor implements HttpInterceptor {

  constructor(private authService: AuthorizationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.authService.userValue;
    const isLoggedIn = user && user.jwtToken;
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
        request = request.clone({
            setHeaders: { Authorization: `Bearer ${user.jwtToken}` }
        });
    }

    return next.handle(request);
  }
}
