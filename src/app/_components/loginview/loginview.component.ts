import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthorizationService } from '../../_services/authorize/authorization.service';

export enum Transaction{
  login,
  otp,
  verify
}

@Component({
  selector: 'app-loginview',
  templateUrl: './loginview.component.html',
  styleUrls: ['./loginview.component.scss']
})
export class LoginviewComponent implements OnInit {

public loginForm: FormGroup;
public submitted = false;
returnUrl;
loading = false;
error;
isOtp = false;
phone = '';
transaction = 'login';
otpcode = '';
otp = {
  val1: '',
  val2: '',
  val3: '',
  val4: '',
  val5: '',
};


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
              private authenticationService: AuthorizationService) {
                if (this.authenticationService.userValue) {
                  this.router.navigate(['/dashboard']);
              }
            }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.paramMap.get('returnUrl') || '/dashboard';
  }

  // tslint:disable-next-line: typedef
  get f() { return this.loginForm.controls; }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.loading = true;
      this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.router.navigate([this.returnUrl]);
                },
                error: error => {
                    this.error = error;
                    this.loading = false;
                }
            });

    }
  }

  // tslint:disable-next-line: typedef
  codeEntered(event){
    const el = event.srcElement;
    // tslint:disable-next-line: one-variable-per-declaration
    const tidx = +(el.getAttribute('tabindex')) + 1,
    elements = document.getElementsByTagName('input');

    for (let i = elements.length; i--;) {
        const tidx2 = elements[i].getAttribute('tabindex');
        if (Number(tidx2) === tidx) { elements[i].focus(); }
    }
  }

  // tslint:disable-next-line: typedef
  phoneSubmit(){
    console.log(this.phone);
    this.authenticationService.sendOtp(this.phone)
                              .subscribe(x => {console.log(x); this.transaction = 'verify'; } , (error) => console.log(error));
  }

  // tslint:disable-next-line: typedef
  verifyPhone(){
    const otpcode = this.otp.val1 + this.otp.val2 + this.otp.val3 + this.otp.val4 + this.otp.val5;
    this.authenticationService.verifyOtp(otpcode).pipe(first())
    .subscribe({
        next: () => {
            this.router.navigate([this.returnUrl]);
        },
        error: error => {
            this.error = error;
            this.loading = false;
        }
    });
  }

}
