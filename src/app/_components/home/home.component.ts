import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'src/app/_model/user';
import { AccountService } from 'src/app/_services/account.service';
import { AuthorizationService } from 'src/app/_services/authorize/authorization.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router, private authService: AuthorizationService,
               private account: AccountService) { }

  user: User;
  dashboard;

  ngOnInit(): void {
    this.user = this.authService.userValue;
    this.account.getdashboardData().pipe(map(projects => {
      this.dashboard = projects;
     })).subscribe();
  }

  // tslint:disable-next-line: typedef
  navigate(path){
    if (path === 0){
      this.router.navigate(['/dashboard/projects']);
    }
    else{
      this.router.navigate(['/dashboard/agents']);
    }

  }

}
