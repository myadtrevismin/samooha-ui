import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlobService, UploadParams } from 'angular-azure-blob-service';
import { User } from 'src/app/_model/user';
import { AccountService } from 'src/app/_services/account.service';
import { AuthorizationService } from 'src/app/_services/authorize/authorization.service';
import { ProjectserviceService } from 'src/app/_services/projects/projectservice.service';
import { environment } from 'src/environments/environment';

interface IUploadProgress {
  filename: string;
  progress: number;
  filePath: string;
}

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.scss']
})
export class EditprojectComponent implements OnInit {

  constructor(private projectService: ProjectserviceService,
              private router: ActivatedRoute,
              private formBuilder: FormBuilder,
              private authorizeService: AuthorizationService,
              private sanitizer: DomSanitizer,
              private http: HttpClient,
              private blob: BlobService,
              private accountService: AccountService,
              private datePipe: DatePipe) { }

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
  editableProject;
  progress = 0;

  ngOnInit(): void {
    const projectId = this.router.snapshot.params.id;
    this.plotForm = this.formBuilder.group({
      plotId : [''],
      plotCode: ['', Validators.required],
      name : ['', Validators.required],
      location : ['', Validators.required],
      logo: [''],
      uploadedDate : [''],
      uploadedBy : [''],
      sections : [''],
    });

    this.authorizeService.user.subscribe(x => {this.user = x; });
    this.projectService.getProjectById(projectId).subscribe(x => {
      this.editableProject = x;
      this.patchPlots();
    });
  }

  get f() { return this.plotForm.controls; }

  patchPlots(): void{
    this.layoutfile.filename = this.editableProject.logo;
    this.plotForm.patchValue({
      plotId : this.editableProject.plotId,
      plotCode: this.editableProject.plotCode,
      name : this.editableProject.plotName,
      location : this.editableProject.location,
      logo: this.editableProject.logo,
      uploadedDate : this.datePipe.transform(this.editableProject.uploadedDate, 'yyyy-MM-dd'),
      uploadedBy : this.editableProject.uploadedBy,
    });
  }

  plotSubmit(): void {
    this.submitted = true;
    if (this.plotForm.valid) {
      this.loading = true;

      const plot = {
        plotId: this.editableProject.plotId,
        plotName: this.f.name.value,
        plotCode: this.f.plotCode.value,
        location: this.f.location.value,
        logoPath: this.editableProject.logoPath,
        filePath: this.editableProject.filePath,
        uploadedDate: this.editableProject.uploadedDate,
        uploadedBy: this.user.id,
      };

      this.projectService.updateProject(plot).subscribe(x => { if (x > 0) {
        this.success = true;
        this.loading = false;
      }}, (error) => { this.loading = false; this.error = error; });
    }
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
            this.editableProject.logoPath = baseUrl;
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
