import {
  Injectable
} from '@angular/core';
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
export class AccountService {

  constructor(private router: Router, private http: HttpClient) {

  }

  private registerSubject: BehaviorSubject<User>;

  // tslint:disable-next-line: typedef
  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/api/accounts`,{
      withCredentials: true
    }
    );
  }

  // tslint:disable-next-line: typedef
  register(model) {
    return this.http.post<any> (`${environment.apiUrl}/api/accounts/register`, model, {
      withCredentials: true
    })
    .pipe(map(user => {
      this.registerSubject.next(user);
      return user;
    }));
  }

  // tslint:disable-next-line: typedef
  verifyEmail(token: any) {
    return this.http.post<any> (`${environment.apiUrl}/api/accounts/verify-email`, {
      token
    },
    {
      withCredentials: true
    });
  }

  // tslint:disable-next-line: typedef
  getdashboardData(){
    return this.http.get<any>(`${environment.apiUrl}/api/dashboard`, {
      withCredentials: true
    });
  }
}
