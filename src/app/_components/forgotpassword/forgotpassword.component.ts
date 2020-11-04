import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private accountservice: AccountService) { }

  submitted;
  email;
  success;
  error;

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  emailSubmit(){
    this.submitted = true;
    this.accountservice.forgotpassword({email: this.email}).subscribe(x => this.success = x.message,
      (error) => this.error = error) ;
  }

}
