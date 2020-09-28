import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private accountService: AccountService) { }

  profileId;
  agent: any;
  error;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['sno', 'projectid', 'logo', 'name', 'date'];

  ngOnInit(): void {
    this.profileId = this.route.snapshot.paramMap.get('id');
    this.dataSource = new MatTableDataSource();
    this.loadAgentById();
  }


  // tslint:disable-next-line: typedef
  loadAgentById(){
    this.accountService.getAgentById(this.profileId)
                        .subscribe(x => {
                          this.agent = x;
                          if (x.subProjects !== null){
                            const projects = [];
                            x.subProjects.forEach(element => {
                              projects.push(x.plot);
                            });
                            this.dataSource.data = projects;
                          }
                        }, (error) => this.error = error);
  }


}
