import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: ActivatedRoute,
              private accountService: AccountService) { }

  public resetpasswordForm: FormGroup;
  public submitted = false;
  message;
  success;
  error;

  ngOnInit(): void {

   const token = this.router.snapshot.queryParams.token;
   console.log(token);

   this.resetpasswordForm = this.formBuilder.group({
      token: [ token, Validators.required],
      password : ['', Validators.required],
      confirmPassword : ['', Validators.required],
      });
  }

  // tslint:disable-next-line: typedef
  get f() { return this.resetpasswordForm.controls; }

  // tslint:disable-next-line: typedef
  passwordSubmit(){
    this.submitted = true;

    if (this.resetpasswordForm.valid){
      this.accountService.resetPassword(this.resetpasswordForm.value)
                            .subscribe(x => {
                              this.message = x.message;
                              this.success = true; } , (error) => this.error = error);

    }

  }

}
