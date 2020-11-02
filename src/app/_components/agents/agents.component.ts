import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { AuthorizationService } from 'src/app/_services/authorize/authorization.service';
import { ProjectserviceService } from 'src/app/_services/projects/projectservice.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  projects$;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['sno', 'agentId', 'name', 'email', 'phone', 'star'];
  @Input()
  role;
  agentText;
  deleteMessage;
  error;
  roleType;
  loginuser;


  constructor(private accountService: AccountService,
              private auth: AuthorizationService,
              private router: Router) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.loadAgents();
  }

  // tslint:disable-next-line: typedef
  loadAgents(){
   this.loginuser = this.auth.userValue.role;
   this.roleType = this.role || 'Agent';
   this.agentText = this.roleType === 'Agent' ? 'Agents' : 'Admins';
   this.accountService.getAll().subscribe(x => {
      this.dataSource.data = x.filter(a => a.role === this.roleType);
      this.deleteMessage = null;
      this.error = null;
    });
  }

  // tslint:disable-next-line: typedef
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // tslint:disable-next-line: typedef
  click(eve: Event, row){
    eve.preventDefault();
    this.router.navigate(['/dashboard/agents/profile', row.id]);
  }

  // tslint:disable-next-line: typedef
  clickDelete($event: Event, row){
    $event.preventDefault();
    this.accountService.deleteAgentById(row.id)
    .subscribe(x => {this.deleteMessage =  x.message; this.loadAgents(); }, (error) => this.error = error);
  }

  // tslint:disable-next-line: typedef
  applyFilter(eve: Event){
    const filterValue = (eve.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // tslint:disable-next-line: typedef
  clickEdit($event, row){
    $event.preventDefault();
    this.router.navigate(['/dashboard/profile', row.id]);
  }

}
