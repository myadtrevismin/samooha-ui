import * as d3 from 'd3';
import * as d3zoom from 'd3-zoom';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
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
export class ProjectdetailComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute,
              private projects: ProjectserviceService,
              private sanitizer: DomSanitizer,
              private http: HttpClient,
              public dialog: MatDialog) {}

  project;
  showProgress = true;
  svgHtml;
  uploadSuccess;
  error;
  plotsCount;

  ngOnInit(): void {
    this.loadProject();
  }

  // tslint:disable-next-line: typedef
  loadProject(){
    const projectId = this.route.snapshot.paramMap.get('id');
    this.projects.getProjectById(projectId)
    .subscribe(x => {
      this.project = x;
      this.plotsCount = x.plotsCount;
      this.loadfile();
      this.showProgress = false;
    });
  }

  // tslint:disable-next-line: typedef
  ngAfterViewInit(){
  }

  // tslint:disable-next-line: typedef
  zoomed(transform){
    const g =  d3.select('g');
    g.attr('transform', transform);
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
        const svgdoc = d3.select('svg').attr('width', '100%')
        .attr('preserveAspectRatio', 'xMinYMin meet')
        .attr('viewBox', '200 200 600 400')
        .classed('svg-content-responsive', true)
        .attr('height', '100%')
        .call(d3.zoom()
        .on('zoom', ({transform}) => this.zoomed(transform)));
        //console.log(svgdoc);
        svg.classList.add('w-100', 'h-auto');
        const paths = document.querySelectorAll('[class*=\'plot\']');
        const pathArray = [];
        paths.forEach(x => {
          const plotsection = this.project.sections.filter(a => a.name === x.classList[0].split('-')[1]);
          if (plotsection?.length > 0){
            const colrelement = document.getElementById(plotsection[0].location);
            if (colrelement !== null && plotsection[0].currentStatus === 2){
              colrelement.style.fill = '#f8c6c8';
            }
          }
          x.addEventListener('click', (event: Event) => {
            this.clickedOnPlot(event, x);
            x.setAttribute('title', x.id);
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
      data: {path: x, plot: this.project, evt}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== null && result !== undefined){
        this.showProgress = true;
        this.projects.savePlotDetails(result)
        .subscribe(y => {if (y > 0){ this.uploadSuccess = true; this.loadProject();
                                     this.showProgress = false; }}, (error) => {this.showProgress = false; this.error = error; }  );
      }
    });
  }

}
