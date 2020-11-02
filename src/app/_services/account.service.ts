import {
  Injectable
} from '@angular/core';
import {
  HttpClient, HttpParams
} from '@angular/common/http';
import {
  Router
} from '@angular/router';
import {
  BehaviorSubject,
  identity,
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
    return this.http.get<User[]>(`${environment.apiUrl}/api/accounts`, {
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
  registerAgent(model) {
    return this.http.post<any> (`${environment.apiUrl}/api/accounts/register`, model, {
      withCredentials: true,
    })
    .pipe(map(user => {
      return user;
    }));
  }

  // tslint:disable-next-line: typedef
  updateProfile(model){
    const options = model.id ?
    { params: new HttpParams().set('id', model.id)} : {};

    return this.http.put<any> (`${environment.apiUrl}/api/accounts/profile`, model, {
      withCredentials: true,
      params: options.params
    })
    .pipe(map(user => {
      return user;
    }));
  }

// tslint:disable-next-line: typedef
forgotpassword(model){
  return this.http.post<any> (`${environment.apiUrl}/api/accounts/forgot-password`, model, {
    withCredentials: true
  })
  .pipe(map(user => {
    return user;
  }));
}

// tslint:disable-next-line: typedef
resetPassword(model){
  return this.http.post<any> (`${environment.apiUrl}/api/accounts/reset-password`, model, {
    withCredentials: true
  })
  .pipe(map(user => {
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

  // tslint:disable-next-line: typedef
  getAgentById(id){
    console.log(id);
    return this.http.get<any>(`${environment.apiUrl}/api/accounts/agent/` + id, {
      withCredentials: true
    });
  }

  // tslint:disable-next-line: typedef
  getAgentcodes(){
    return this.http.get<any>(`${environment.apiUrl}/api/accounts/generatecodes`, {
      withCredentials: true
    });
  }

  // tslint:disable-next-line: typedef
  deleteAgentById(id){

    return this.http.post<any>(`${environment.apiUrl}/api/accounts/agent/delete`, {id},
     {
      withCredentials: true,
    });
  }
}
