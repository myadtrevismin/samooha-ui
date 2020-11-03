import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlobService, UploadParams } from 'angular-azure-blob-service';
import { Observable } from 'rxjs';
import { User } from 'src/app/_model/user';
import { AccountService } from 'src/app/_services/account.service';
import { environment } from 'src/environments/environment';
import { IsValid } from './phonecheck';

@Component({
  selector: 'app-addagent',
  templateUrl: './addagent.component.html',
  styleUrls: ['./addagent.component.scss']
})
export class AddagentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private accountService: AccountService,
              private blob: BlobService) { }

  agentForm: FormGroup;
  progress;
  profilefile = 'No File Chosen';
  submitted;
  uploadedFile;
  config;
  success;
  error;
  projectCode;
  @Input()
  role;
  @Input()
  editProfile;
  agentText;
  editable = false;
  accounts;

  ngOnInit(): void {
    const roleType = this.role || 'Agent';
    this.agentText = roleType === 'Agent' ? 'Add Agent' : 'Add Admin';
    (this.accountService.getAll()
    .subscribe(
      x => {
        this.accounts = x;
        return x;
      }
    )) ;

    this.agentForm = this.formBuilder.group({
      accountCode: ['', Validators.required],
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      profileFile : [''],
      phone : ['', Validators.required],
      email: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['']
    });
    this.randomDbGenerator();
  }

  // tslint:disable-next-line: typedef
  get f() { return this.agentForm.controls; }

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
  submitAgent(){
    this.success = false;
    this.error = null;
    this.submitted = true;
    const passwordid = this.passwordgenerator();
    if (this.agentForm.valid){
      const model = {
        title: 'Agent',
        acceptTerms: true,
        accountCode: this.f.accountCode.value,
        firstName : this.f.firstName.value,
        lastName : this.f.lastName.value,
        profileFile : this.uploadedFile,
        phoneNumber : this.f.phone.value,
        email: this.f.email.value,
        dateOfBirth: this.f.dateOfBirth.value,
        address: this.f.address.value,
        password: passwordid,
        confirmPassword: passwordid,
        role: this.role === undefined || this.role === null ? 2 : this.role,
      };
      this.accountService.registerAgent(model).subscribe(x => this.success = true, (error) => this.error = error);
    }
  }

  // tslint:disable-next-line: typedef
  randomCodeGenerator(){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * 5));
    }
    return 'SM-A-' + result;
  }

  // tslint:disable-next-line: typedef
  passwordgenerator(){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!?@#';

    for (let i = 0; i < 6; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * 6));
    }

    for (let i = 0; i < 2; i++ ) {
      result += lower.charAt(Math.floor(Math.random() * 2));
    }

    for (let i = 0; i < 2; i++ ) {
      result += numbers.charAt(Math.floor(Math.random() * 2));
    }

    for (let i = 0; i < 2; i++ ) {
      result += symbols.charAt(Math.floor(Math.random() * 2));
    }

    return result.split('').sort(() => {
      return 0.5 - Math.random();
    }).join('');
  }

  // tslint:disable-next-line: typedef
  randomDbGenerator(){
    this.accountService.getAgentcodes()
    .subscribe(x =>  this.agentForm.get('accountCode').setValue(x.NewAgent), (error) => this.error = error);
  }

  onPhoneChange(event): void{
    const matched = this.accounts.some((x: User) => x.phoneNumber === event.target.value);
    if (matched){
      const matchedControl = this.agentForm.controls['phone'];
      matchedControl.setErrors({ phoneExist: true });
    }
  }

}
