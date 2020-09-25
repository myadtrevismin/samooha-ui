import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
              public dialog: MatDialog, private auth: AuthorizationService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  projects$;
  dataSource: MatTableDataSource<any>;
  total$: Observable<number>;
  displayedColumns: string[] = ['sno', 'projectid', 'logo', 'name', 'date'];

  ngOnInit(): void {
    console.log(this.auth.userValue);
    this.dataSource = new MatTableDataSource();
    this.loadProjects();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // tslint:disable-next-line: typedef
  loadProjects(){
    this.projectservice.getProjects().pipe(map(projects => {
      this.dataSource.data = projects;
    })).subscribe(x => (console.log(this.projects$)) );
  }

  openDialog(){
    const dialogRef = this.dialog.open(ProjectmodalComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.loadProjects();
    });
  }

}
