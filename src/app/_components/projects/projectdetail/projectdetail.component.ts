import * as d3 from 'd3';
import * as d3zoom from 'd3-zoom';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProjectserviceService } from 'src/app/_services/projects/projectservice.service';
import { ProjectdialogComponent } from '../projectdialog/projectdialog.component';
import { BlobService, UploadParams } from 'angular-azure-blob-service';
import { environment } from 'src/environments/environment';
import { AuthorizationService } from 'src/app/_services/authorize/authorization.service';


@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectdetailComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute,
              private projects: ProjectserviceService,
              private sanitizer: DomSanitizer,
              private blob: BlobService,
              private http: HttpClient,
              public dialog: MatDialog,
              public authService: AuthorizationService) {}

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
  config;
  progress;
  filePath;
  fileImg;
  role;

  ngOnInit(): void {
    this.role = this.route.snapshot.queryParams.role;
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
    const g =  d3.select('g');
    console.log(g);
    console.log(transform);
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
        const container = document.getElementById('container-img');
        const {width, height} = container.getBoundingClientRect();
        document.getElementById('container-img').innerHTML = this.svgHtml;
        const svg = document.getElementById('container-img').querySelector('svg');
        const viewBox = '0 0 ' + (height) + ' ' + (width);
        const svgdoc = d3.select('svg')
        .attr('preserveAspectRatio', 'xMinYMin meet')
        .attr('width', width)
        .attr('viewBox', viewBox)
        .classed('svg-content-responsive', true)
        .attr('height', height)
        .call(d3.zoom().scaleExtent([1, 50])
        .on('zoom', ({transform}) => this.zoomed(transform)));
        svg.classList.add('svgfile');
        const paths = document.querySelectorAll('[id*=\'plot\']');
        const pathArray = [];
        paths.forEach(x => {
          const plotsection = this.project.sections.filter(a => a.name === x.id.split('-')[1]);
          if (plotsection?.length > 0){
            const colrelement = document.getElementById(plotsection[0].location);
            if (colrelement.firstElementChild !== null && plotsection[0].currentStatus === 2){
               colrelement.firstElementChild.setAttribute('class', 'stfilled');
            }
          }

          const nfsclass = x.querySelector('.nfs');
          const userrole = this.authService.userValue?.role || this.role;
          if (userrole !== 'Agent' && nfsclass === null){
            x.addEventListener('click', (event: Event) => {
              this.clickedOnPlot(event, x);
              x.setAttribute('title', x.id);
            }, { passive: true});

            x.addEventListener('mouseover', (event: Event) => {
            });
          }
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
    tooltip.style('visibility', 'visible');
  }

  printPage(): void{
    const g =  d3.select('g');
    g.attr('transform', 'translate(30 30) scale(1)');
    const svgElement = document.getElementsByClassName('svgfile')[0];
    const {width, height} = svgElement.getBoundingClientRect();
    const clonedSvgElement: any = svgElement.cloneNode(true);
    d3.select(clonedSvgElement)
    .attr('width', '100%').attr('height', '100%')
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', '0 0 ' + 1920 + ' ' + 1080)
    .classed('svg-content-responsive', true);
    const outerHTML = clonedSvgElement.outerHTML;
    const svgString = new XMLSerializer().serializeToString(clonedSvgElement);
    const index = svgString.replace('&amp;#38;#38;#38;#38;#38;#38;ns_ai;', 'http://www.w3.org/2000/svg');

    const blobs = new Blob([index], {type: 'image/svg+xml;charset=utf-8'});
    const blobURL = URL.createObjectURL(blobs);

    const dl = document.createElement('a');
    document.body.appendChild(dl); // This line makes it work in Firefox.
    dl.setAttribute('href', blobURL);
    dl.setAttribute('download', 'plot.svg');
    dl.click();
    document.body.removeChild(dl);
  }

  upload(file): void {
    const Config: UploadParams = {
      sas: environment.blobkey,
      storageAccount: environment.bloburl,
      containerName: 'plots'
    };

    if (file !== null) {
      const baseUrl = this.blob.generateBlobUrl(Config, file.name);
      this.config = {
        baseUrl,
        sasToken: Config.sas,
        file,
        complete: () => {
          this.filePath = baseUrl;
        },
        error: (err) => {
          console.log('Error:', err);
        },
        progress: (percent) => {
          this.progress = percent;
        }
      };
      this.blob.upload(this.config);
    }
  }



  downloadImage(canvas): void{
    const png = canvas.toDataURL();
    this.download(png, 'download.png');
  }

  download(href, name): void{
    const link = document.createElement('a');
    link.download = name;
    link.style.opacity = '0';
    document.append(link);
    link.href = href;
    link.click();
    link.remove();
  }
}
