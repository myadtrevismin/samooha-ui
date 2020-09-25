import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/_services/account.service';

enum EmailStatus {
  Verifying,
  Failed
}

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.scss']
})
export class VerifyemailComponent implements OnInit {

  EmailStatus = EmailStatus;
  emailStatus = EmailStatus.Verifying;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private accountService: AccountService) { }


  ngOnInit(): void {
    const token = this.route.snapshot.queryParams['token'];

    this.router.navigate([], { relativeTo: this.route, replaceUrl: true });

    this.accountService.verifyEmail(token)
        .pipe(first())
        .subscribe({
            next: () => {
                this.router.navigate(['/login'], { relativeTo: this.route });
            },
            error: () => {
                this.emailStatus = EmailStatus.Failed;
            }
        });
  }

}
