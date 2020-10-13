import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_helpers/auth.guard';
import { AddadminComponent } from './_components/agents/addadmin/addadmin.component';
import { AddagentComponent } from './_components/agents/addagent/addagent.component';
import { AdminsComponent } from './_components/agents/admins/admins.component';
import { AgentsComponent } from './_components/agents/agents.component';
import { ProfileComponent } from './_components/agents/profile/profile.component';
import { ForgotpasswordComponent } from './_components/forgotpassword/forgotpassword.component';
import { HomeComponent } from './_components/home/home.component';
import { LoginLayoutComponent } from './_components/login-layout/login-layout.component';
import { LoginviewComponent } from './_components/loginview/loginview.component';
import { MainLayoutComponent } from './_components/main-layout/main-layout.component';
import { ProjectdetailComponent } from './_components/projects/projectdetail/projectdetail.component';
import { ProjectlistComponent } from './_components/projects/projectlist/projectlist.component';
import { ProjectmodalComponent } from './_components/projects/projectmodal/projectmodal.component';
import { RegisterviewComponent } from './_components/registerview/registerview.component';
import { ResetpasswordComponent } from './_components/resetpassword/resetpassword.component';
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
      { path: 'projects/create', component: ProjectmodalComponent, canActivate: [AuthGuard] },
      { path: 'agents', component: AgentsComponent, canActivate: [AuthGuard] },
      { path: 'agents/create', component: AddagentComponent, canActivate: [AuthGuard] },
      { path: 'agents/profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'projects/:id', component: ProjectdetailComponent, canActivate: [AuthGuard] },
      { path: 'admins', component: AdminsComponent, canActivate: [AuthGuard] },
      { path: 'admins/create', component: AddadminComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: 'projects/:id', component: ProjectdetailComponent },
  { path: 'register', component: RegisterviewComponent },
  { path: 'accounts/verify-email/:token', component: VerifyemailComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'account/reset-password', component: ResetpasswordComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
