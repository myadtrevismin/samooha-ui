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
    {id: 0, name: 'Add Projects', active: true, icon: 'description', path: '/dashboard/projects/create'},
    {id: 1, name: 'View Projects', active: false, icon: 'person_add', path: '/dashboard/projects'},
  ];

  agents = [
    {id: 0, name: 'Add Agents', active: true, icon: 'description', path: '/dashboard/agent'},
    {id: 1, name: 'View Agents', active: false, icon: 'person_add', path: '/dashboard/agents'},
  ];
  projectcollapsed = false;
  agentcollapsed = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthorizationService) {
  }

  ngOnInit(): void {
    this.user = this.authService.userValue;
    console.log(this.user);
  }

  setActive(nav){
    //this.navs.forEach(x => x.active = false);
    nav.active = true;
  }

  logout(){
    this.authService.logout();
  }

  clickSubheader(type){
    if (type === 'agent'){
      this.agentcollapsed = !this.agentcollapsed;
      if (this.agentcollapsed === true){
        this.projectcollapsed = false;
      }
    }
    else{
      this.projectcollapsed = !this.projectcollapsed;
      if (this.projectcollapsed === true){
        this.agentcollapsed = false;
      }
    }
  }

}
