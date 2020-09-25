import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_helpers/auth.guard';
import { AgentsComponent } from './_components/agents/agents.component';
import { HomeComponent } from './_components/home/home.component';
import { LoginLayoutComponent } from './_components/login-layout/login-layout.component';
import { LoginviewComponent } from './_components/loginview/loginview.component';
import { MainLayoutComponent } from './_components/main-layout/main-layout.component';
import { ProjectdetailComponent } from './_components/projects/projectdetail/projectdetail.component';
import { ProjectlistComponent } from './_components/projects/projectlist/projectlist.component';
import { RegisterviewComponent } from './_components/registerview/registerview.component';
import { VerifyemailComponent } from './_components/verifyemail/verifyemail.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', component: LoginLayoutComponent,
    children: [
      {path: '', component: LoginviewComponent}
    ]
  },
  { path: 'dashboard', component: MainLayoutComponent,
    children: [
      { path: '',  component: HomeComponent, pathMatch: 'full' },
      { path: 'projects', component: ProjectlistComponent, canActivate: [AuthGuard] },
      { path: 'agents', component: AgentsComponent, canActivate: [AuthGuard] },
      { path: 'projects/:id', component: ProjectdetailComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: 'register', component: RegisterviewComponent },
  { path: 'accounts/verify-email', component: VerifyemailComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
