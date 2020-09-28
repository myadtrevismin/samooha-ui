import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProjectserviceService } from 'src/app/_services/projects/projectservice.service';
import { ProjectdialogComponent } from '../projectdialog/projectdialog.component';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectdetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private projects: ProjectserviceService,
              private sanitizer: DomSanitizer,
              private http: HttpClient,
              public dialog: MatDialog) {}

  project;
  showProgress = true;
  svgHtml;

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.projects.getProjectById(projectId)
      .subscribe(x => {
        this.project = x;
        this.loadfile();
        this.showProgress = false;
      });
  }

  // tslint:disable-next-line: typedef

  // tslint:disable-next-line: typedef
  loadfile() {
    this.http.get(this.project.filePath, {
        responseType: 'text'
      })
      .subscribe(logo => {
        this.svgHtml = logo;
        document.getElementById('container-img').innerHTML = this.svgHtml;
        const svg = document.getElementById('container-img').querySelector('svg');
        svg.classList.add('w-100', 'h-auto');
        const paths = document.querySelectorAll('[id*=\'plot\']');
        const pathArray = [];
        paths.forEach(x => {
          console.log(x);
          x.addEventListener('click', (event: Event) => {
            this.clickedOnPlot(event, x);
            x.setAttribute('title', x.id);
            alert(x.id);
          });
          pathArray.push({
            id: x.id,
            status: x.classList[0]
          });
        });
      });
  }

  // tslint:disable-next-line: typedef
  clickedOnPlot(evt, x){
    const dialogRef = this.dialog.open(ProjectdialogComponent, {
      width: '80%',
      data: {path: x, plot: this.project}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
