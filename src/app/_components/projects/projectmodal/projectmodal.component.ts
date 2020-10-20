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
import { AccountService } from 'src/app/_services/account.service';

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
              private accountService: AccountService) { }

  plotForm: FormGroup;
  user: User;
  submitted;
  loading = false;
  files = [];
  svgHtml;
  success;
  projectCode;
  error;
  config;
  percent;
  filepercent;
  editable = false;
  logofile: IUploadProgress = { filename: 'Upload Logo', filePath: '', progress: 0};
  layoutfile: IUploadProgress = { filename: 'Upload Layout', filePath: '', progress: 0};

  ngOnInit(): void {
    this.randomDbGenerator();
    this.plotForm = this.formBuilder.group({
      plotId : [''],
      plotCode: ['', Validators.required],
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
    if (this.plotForm.valid) {
      this.loading = true;

      const plot = {
        plotName: this.f.name.value,
        plotCode: this.f.plotCode.value,
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
          const paths = document.querySelectorAll("[id*='plot']");
          const pathArray = [];
          const classList = [];
          paths.forEach(x => {
            console.log(x);
            pathArray.push(x.id);
            // if (classList.indexOf(x.classList[0]) < 0){
            //   pathArray.push({id: x.id, property: x.classList[0] });
            //   classList.push(x.classList[0]);
            // }
          });

          plot.sections = [];
          pathArray.forEach(a => {
            const splitText = a.split('-');
            const section = {
              location: a,
              name: splitText[1],
              category1: splitText[2],
              category2: splitText[3],
              category3: splitText[4],
              category4: splitText[5],
              currentStatus: 0,
              startDate: new Date(),
              updateDate: new Date(),
              updatedBy: this.user.id
            };
            plot.sections.push(section);
          });

          this.projectService.saveProject(plot).subscribe(x => { if (x > 0) {
            this.success = true;
            this.loading = false;
          }}, (error) => { this.loading = false; this.error = error; });
        });
    }
  }

  // tslint:disable-next-line: typedef
  // onClose() {
  //   this.dialogRef.close();
  // }

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

  // tslint:disable-next-line: typedef
  randomCodeGenerator(){
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 5; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * 5));
      }
      return 'SM-' + result;
  }

  // tslint:disable-next-line: typedef
  randomDbGenerator(){
    this.accountService.getAgentcodes().subscribe(x => this.plotForm.get('plotCode').setValue(x.NewProject), (error) => this.error = error);
  }

}
