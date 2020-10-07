import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthorizationService } from 'src/app/_services/authorize/authorization.service';
import { User } from 'src/app/_model/user';

@Component({
  selector: 'app-appnavigation',
  templateUrl: './appnavigation.component.html',
  styleUrls: ['./appnavigation.component.scss']
})
export class AppnavigationComponent implements OnInit {

  user: User;
  projects = [
    {id: 0, name: 'Add Projects', active: true, icon: 'description',
     path: '/dashboard/projects/create', hidden: false},
    {id: 1, name: 'View Projects', active: false, icon: 'person_add', path: '/dashboard/projects', hidden: false},
  ];

  agents = [
    {id: 0, name: 'Add Agents', active: true, icon: 'description', path: '/dashboard/agents/create', hidden: false},
    {id: 1, name: 'View Agents', active: false, icon: 'person_add', path: '/dashboard/agents', hidden: false},
  ];

  admins = [
    {id: 0, name: 'Add Admin', active: false, icon: 'person_add', path: '/dashboard/admins/create', hidden: false},
    {id: 1, name: 'View Admins', active: false, icon: 'description', path: '/dashboard/admins', hidden: false}
  ];

  projectcollapsed = false;
  agentcollapsed = false;
  admincollapsed = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthorizationService) {
  }

  ngOnInit(): void {
    this.user = this.authService.userValue;
    if (this.user.role === 'Agent'){
      this.projects[0].hidden = true;
      this.agents[0].hidden = true;
    }
  }

  // tslint:disable-next-line: typedef
  setActive(nav){
    //this.navs.forEach(x => x.active = false);
    nav.active = true;
  }

  // tslint:disable-next-line: typedef
  logout(){
    this.authService.logout();
  }

  // tslint:disable-next-line: typedef
  clickSubheader(type){
    if (type === 'agent'){
      this.agentcollapsed = !this.agentcollapsed;
      if (this.agentcollapsed === true){
        this.projectcollapsed = false;
        this.admincollapsed = false;
      }
    }
    else if (type === 'admin'){
      this.admincollapsed = !this.admincollapsed;
      if (this.admincollapsed === true){
        this.agentcollapsed = false;
        this.projectcollapsed = false;
      }
    }
    else{
      this.projectcollapsed = !this.projectcollapsed;
      if (this.projectcollapsed === true){
        this.agentcollapsed = false;
        this.admincollapsed = false;
      }
    }
  }

}
