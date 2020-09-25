import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthorizationService } from '../../_services/authorize/authorization.service';

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

}
