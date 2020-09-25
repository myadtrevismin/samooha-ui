import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/_services/account.service';
import {MustMatch} from './MustMatch';

@Component({
  selector: 'app-registerview',
  templateUrl: './registerview.component.html',
  styleUrls: ['./registerview.component.scss']
})
export class RegisterviewComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
              private authenticationService: AccountService) { }

  public registerForm: FormGroup;
  public submitted = false;
  returnUrl;
  loading = false;
  error;


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  // tslint:disable-next-line: typedef
  get f() { return this.registerForm.controls; }

  // tslint:disable-next-line: typedef
  onSubmit() {
      this.submitted = true;

      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.register(this.registerForm.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  this.router.navigate(['../login'], { relativeTo: this.route });
              },
              error: error => {
                  this.loading = false;
              }
          });
        }
}
