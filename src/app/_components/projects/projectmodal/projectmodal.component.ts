import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/_model/user';
import { AuthorizationService } from 'src/app/_services/authorize/authorization.service';
import { BlobService, UploadConfig, UploadParams, BlobModule } from 'angular-azure-blob-service';
import { ProjectserviceService } from 'src/app/_services/projects/projectservice.service';
import { environment } from 'src/environments/environment';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface IUploadProgress {
  filename: string;
  progress: number;
  filePath: string;
}

@Component({
  templateUrl: './projectmodal.component.html',
  styleUrls: ['./projectmodal.component.scss']
})
export class ProjectmodalComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private authorizeService: AuthorizationService,
              private projectService: ProjectserviceService,
              private sanitizer: DomSanitizer,
              private http: HttpClient,
              private blob: BlobService,
              private router: Router,
              public dialogRef: MatDialogRef<ProjectmodalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  plotForm: FormGroup;
  user: User;
  submitted;
  files = [];
  svgHtml;
  success;
  error;
  config;
  percent;
  filepercent;
  logofile: IUploadProgress = { filename: 'Upload Logo', filePath: '', progress: 0};
  layoutfile: IUploadProgress = { filename: 'Upload Layout', filePath: '', progress: 0};

  ngOnInit(): void {
    this.plotForm = this.formBuilder.group({
      plotId : [''],
      name : ['', Validators.required],
      location : ['', Validators.required],
      logo: [''],
      filePath : [''],
      uploadedDate : [''],
      uploadedBy : [''],
      sections : [''],
    });

    this.authorizeService.user.subscribe(x => {this.user = x; });
  }

  // tslint:disable-next-line: typedef
  get f() { return this.plotForm.controls; }

  // tslint:disable-next-line: typedef
  plotSubmit() {
    this.submitted = true;
    console.log(this.plotForm);
    if (this.plotForm.valid) {
      const plot = {
        plotName: this.f.name.value,
        location: this.f.location.value,
        logoPath: this.logofile.filePath,
        filePath: this.layoutfile.filePath,
        uploadedDate: new Date(),
        uploadedBy: this.user.id,
        sections: null
      };

      this.http.get(this.layoutfile.filePath, { responseType: 'text' })
      .subscribe(logo => {
          this.svgHtml = logo;
          console.log(document.getElementById('output'));
          document.getElementById('output').innerHTML = this.svgHtml;
          const paths = document.querySelectorAll('path');
          const pathArray = [];
          paths.forEach(x => {
            pathArray.push(x.id);
          });

          plot.sections = [];
          pathArray.slice(0, 20).forEach(a => {
            const section = {
              name: a,
              location: a,
              currentStatus: 0,
              startDate: new Date(),
              updateDate: new Date(),
              updatedBy: this.user.id
            };
            plot.sections.push(section);
          });

          this.projectService.saveProject(plot).subscribe(x => { if (x > 0) {
            this.success = true;
            this.onClose();
          }}, (error) => this.error = error);
        });
    }
  }

  // tslint:disable-next-line: typedef
  onClose() {
    this.dialogRef.close();
  }

  // tslint:disable-next-line: typedef
  upload(files, isLogo) {
    const Config: UploadParams = {
      sas: environment.blobkey,
      storageAccount: environment.bloburl,
      containerName: 'plots'
    };

    const file = files[0];
    if (file !== null) {
      const baseUrl = this.blob.generateBlobUrl(Config, file.name);
      this.config = {
        baseUrl,
        sasToken: Config.sas,
        file,
        complete: () => {
          if (isLogo){
            this.logofile.filePath = baseUrl;
            this.logofile.filename = file.name;
          }
          else{
            this.layoutfile.filePath = baseUrl;
            this.layoutfile.filename = file.name;
          }
        },
        error: (err) => {
          console.log('Error:', err);
        },
        progress: (percent) => {
          if (isLogo){
            this.logofile.progress = percent;
          }
          else{
            this.layoutfile.progress = percent;
          }
        }
      };
      this.blob.upload(this.config);
    }
  }

}
