import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Project} from 'src/app/_model/project';
import { AuthorizationService } from 'src/app/_services/authorize/authorization.service';
import {ProjectserviceService} from 'src/app/_services/projects/projectservice.service';
import { ProjectmodalComponent } from '../projectmodal/projectmodal.component';


@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss']
})
export class ProjectlistComponent implements OnInit, AfterViewInit {

  constructor(private projectservice: ProjectserviceService,
              public dialog: MatDialog, private auth: AuthorizationService,
              private router: Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  projects$;
  loginuser;
  dataSource: MatTableDataSource<any>;
  total$: Observable<number>;
  displayedColumns: string[] = ['sno', 'projectid', 'logo', 'name', 'date', 'star'];

  ngOnInit(): void {
    this.loginuser = this.auth.userValue.role;
    this.dataSource = new MatTableDataSource();
    this.loadProjects();
  }

  // tslint:disable-next-line: typedef
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // tslint:disable-next-line: typedef
  loadProjects(){
    this.projectservice.getProjects().pipe(map(projects => {
      this.dataSource.data = projects;
    })).subscribe();
  }

  // tslint:disable-next-line: typedef
  openDialog(){
    const dialogRef = this.dialog.open(ProjectmodalComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.loadProjects();
    });
  }

  // tslint:disable-next-line: typedef
  click(event: Event, row){
    event.preventDefault();
    this.router.navigate(['/dashboard/projects', row.plotId]);
  }

  // tslint:disable-next-line: typedef
  applyFilter(event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // tslint:disable-next-line: typedef
  clickEdit(event, row){
    event.preventDefault();
    this.router.navigate(['/dashboard/projects/edit', row.plotId]);
  }

  // tslint:disable-next-line: typedef
  clickDelete(event, row){
    event.preventDefault();
    this.projectservice.deleteProject(row.plotId).subscribe(x => {
      this.loadProjects();
    });

  }


}
