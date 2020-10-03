import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute,
              private accountService: AccountService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  profileId;
  agent: any;
  error;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['sno', 'projectid', 'logo', 'name', 'plots'];

  ngOnInit(): void {
    this.profileId = this.route.snapshot.paramMap.get('id');
    this.dataSource = new MatTableDataSource();
    this.loadAgentById();
  }

  // tslint:disable-next-line: typedef
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  // tslint:disable-next-line: typedef
  loadAgentById(){
    this.accountService.getAgentById(this.profileId)
                        .subscribe(x => {
                          this.agent = x;
                          if (x.subProjects !== null){
                            const projects = [];
                            x.subProjects.forEach(element => {
                              projects.push(element);
                            });
                            this.dataSource.data = projects;
                            console.log(projects);
                          }
                        }, (error) => this.error = error);
  }


}
