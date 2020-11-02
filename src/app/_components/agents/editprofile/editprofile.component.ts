import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlobService, UploadParams } from 'angular-azure-blob-service';
import { User } from 'src/app/_model/user';
import { AccountService } from 'src/app/_services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private accountService: AccountService,
              private blob: BlobService,
              private router: ActivatedRoute,
              private http: HttpClient,
              private datePipe: DatePipe) { }

  profileForm: FormGroup;


  profile;
  id;

  submitted;
  editable = false;
  success;
  error;
  progress;
  accounts;
  config;
  uploadedFile;
  profilefile;
  profileImg;

  ngOnInit(): void {
    this.id = this.router.snapshot.url[1];
    this.profileForm = this.fb.group({
      accountCode: ['', Validators.required],
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      profileFile : [''],
      phone : ['', Validators.required],
      email: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['']
    });
    this.accountService.getAll()
    .subscribe(
      x => {
        this.accounts = x;
        this.profile = x.filter(y => y.id === Number.parseInt(this.id.path, 10))[0];
        this.patchValues();
        // this.http.get(this.profile.profileFile, {
        //   responseType: 'text'
        // })
        // .subscribe(logo => {
        //   this.profileForm.get('profileFile').setValue(logo);
        // });
        return x;
      }
    );
  }

  get f() {
    return this.profileForm.controls;
  }

  // tslint:disable-next-line: typedef
  patchValues(){
    this.profileForm.patchValue({
      accountCode: this.profile.accountCode,
      firstName : this.profile.firstName,
      lastName : this.profile.lastName,
      phone : this.profile.phoneNumber,
      email: this.profile.email,
      dateOfBirth: this.datePipe.transform(this.profile.dateOfBirth, 'yyyy-MM-dd'),
      address: this.profile.address
    });
  }

  // tslint:disable-next-line: typedef
  submitUser(){
    this.success = false;
    this.error = null;
    this.submitted = true;
    if (this.profileForm.valid){
      const model = {
        id: this.profile.id,
        accountCode: this.f.accountCode.value,
        firstName : this.f.firstName.value,
        lastName : this.f.lastName.value,
        phoneNumber : this.f.phone.value,
        email: this.f.email.value,
        dateOfBirth: this.f.dateOfBirth.value,
        address: this.f.address.value,
        profileFile : this.profile.profileFile,
      };
      this.accountService.updateProfile(model).subscribe(x => this.success = true, (error) => this.error = error);
    }
  }

  // tslint:disable-next-line: typedef
  upload(files){

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
            this.uploadedFile = baseUrl;
            this.profilefile = file.name;
            this.profile.profileFile = baseUrl;
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

  // tslint:disable-next-line: typedef
  onPhoneChange(event){
    const matched = this.accounts.some((x: User) => x.phoneNumber === event.target.value);
    if (matched){
      const matchedControl = this.profileForm.controls.phone;
      matchedControl.setErrors({ phoneExist: true });
    }
  }

}
