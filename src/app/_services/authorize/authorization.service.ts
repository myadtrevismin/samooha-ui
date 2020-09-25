import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Router
} from '@angular/router';
import {
  BehaviorSubject,
  Observable
} from 'rxjs';
import {
  filter,
  map,
  mergeMap,
  take,
  tap
} from 'rxjs/operators';
import {
  User
} from 'src/app/_model/user';
import {
  environment
} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private userSubject: BehaviorSubject <User>;
  public user: Observable <User>;
  private refreshTokenTimeout;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject < User > (null);
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post < any > (`${environment.apiUrl}/api/accounts/authenticate`, {
        email,
        password
      }, {
        withCredentials: true
      })
      .pipe(map(user => {
        this.userSubject.next(user);
        this.startRefreshTokenTimer();
        localStorage.setItem('jwt', user.jwtToken);
        localStorage.setItem('refreshToken', user.refreshToken);
        return user;
      }));
  }

  logout() {
    this.http.post <any> (`${environment.apiUrl}/api/accounts/revoke-token`, {}, {
      withCredentials: true
    }).subscribe();
    this.stopRefreshTokenTimer();
    localStorage.removeItem('jwt');
    localStorage.removeItem('refreshToken');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  refreshToken() {
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post < any > (`${environment.apiUrl}/api/accounts/refresh-token`, {}, {
        withCredentials: true
      })
      .pipe(map((user) => {
        this.userSubject.next(user);
        this.startRefreshTokenTimer();
        return user;
      }));
  }

  private startRefreshTokenTimer() {
    const jwtToken = JSON.parse(atob(this.userValue.jwtToken.split('.')[1]));
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
