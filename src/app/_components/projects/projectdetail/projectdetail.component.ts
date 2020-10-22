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
  width = 900;
  height = 500;
  projectSrc;
  status;

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
      this.status = this.project.sections.filter(a => a.currentStatus === 2)?.length === x.plotsCount ? 'Closed' : 'Open';
      this.loadfile();
      this.showProgress = false;
    });
  }

  // tslint:disable-next-line: typedef
  ngAfterViewInit(){
  }

  // tslint:disable-next-line: typedef
  zoomed(transform){
    // const e = d3.scale
    // const tx = Math.min(0, Math.max(e.translate[0], this.width - this.width * e.scale));
    // const ty = Math.min(0, Math.max(e.translate[1], this.height - this.height * e.scale));
    // const transform1 = d3.zoomTransform(this);
    const g =  d3.select('g');
    g.attr('transform', transform);
    // d3.z
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
        const svgdoc = d3.select('svg').attr('width', this.width)
        .attr('preserveAspectRatio', 'xMinYMin meet')
        .attr('viewBox', '400 0 600 400')
        .classed('svg-content-responsive', true)
        .attr('height', this.height)
        .call(d3.zoom().scaleExtent([1, 50])
        .on('zoom', ({transform}) => this.zoomed(transform)));
        svg.classList.add('w-100', 'h-auto', 'svgfile');
        const paths = document.querySelectorAll('[id*=\'plot\']');
        const pathArray = [];
        // const tooltip = d3.select('#container-img').append('div')
        // .style('position', 'absolute').style('visibility', 'hidden')
        // .text('I\'m a circle!');
        paths.forEach(x => {
          const plotsection = this.project.sections.filter(a => a.name === x.id.split('-')[1]);
          if (plotsection?.length > 0){
            const colrelement = document.getElementById(plotsection[0].location);
            if (colrelement.firstElementChild !== null && plotsection[0].currentStatus === 2){
               colrelement.firstElementChild.setAttribute('class', 'stfilled');
            }
          }
          x.addEventListener('click', (event: Event) => {
            this.clickedOnPlot(event, x);
            x.setAttribute('title', x.id);
          }, { passive: true});
          x.addEventListener('mouseover', (event: Event) => {
            // this.clickedOnPlot(event, x);
           // this.mouseover(event, x, tooltip);
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

  // tslint:disable-next-line: typedef
  mouseover(evt, x, tooltip){
    // element.transition()
    // .duration(200)
    // .style('opacity', .9);
    // element.html(x.id)
    // .style('left', x.firstElementChild.clientLeft + 'px')
    // .style('top', x.firstElementChild.clientTop + 'px');
    // const tooltip = d3.select(x).append('div')
    // .style('position', 'absolute').style('z-index', '3000')
    // .style('visibility', 'hidden').text('a simple tooltip');
    tooltip.style('visibility', 'visible');
    // x.firstElementChild.setAttribute('title', x.id);
    // console.log(element);
  }

  printPage(): void{
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    d3.select('.svgfile').attr('width', 300)
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .classed('svg-content-responsive', true)
    .attr('height', 300);
    const container = document.getElementById('container-img');
    const constcovered = container.firstElementChild.outerHTML;
    const blob = new Blob([constcovered], {type: 'image/svg+xml'});
    const imgsrc = 'data:image/svg+xml;base64,' + btoa( unescape( encodeURIComponent( container.firstElementChild.nodeValue ) ) );
    const url = URL.createObjectURL(blob);
    this.projectSrc = this.sanitizer.bypassSecurityTrustResourceUrl(imgsrc);
    const image = document.createElement('img');
    iframe.src = url;
    document.body.appendChild(iframe);
    iframe.contentWindow.print();
  }
}
