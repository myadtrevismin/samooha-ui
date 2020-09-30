import { Injectable } from '@angular/core';
import {
  HttpClient, HttpParams
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
        return user;
      }));
  }

  // tslint:disable-next-line: typedef
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

  // tslint:disable-next-line: typedef
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

  // tslint:disable-next-line: typedef
  sendOtp(phoneNumber){
    const options = phoneNumber ?
    { params: new HttpParams().set('phonenumber', phoneNumber)} : {};
    return this.http.get<any>(`${environment.apiUrl}/api/Accounts/generateotp`, {
      withCredentials: true,
      params: options.params
    });
  }

  // tslint:disable-next-line: typedef
  verifyOtp(otp){
    const options = otp ?
    { params: new HttpParams().set('otp', otp)} : {};

    return this.http.get<any>(`${environment.apiUrl}/api/Accounts/verifyotp/`, {
      withCredentials: true,
      params: options.params
    }).pipe(map(user => {
      this.userSubject.next(user);
      this.startRefreshTokenTimer();
      return user;
    }));
  }

  // tslint:disable-next-line: typedef
  private startRefreshTokenTimer() {
    const jwtToken = JSON.parse(atob(this.userValue.jwtToken.split('.')[1]));
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  // tslint:disable-next-line: typedef
  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
