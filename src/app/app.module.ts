import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginviewComponent } from './_components/loginview/loginview.component';
import { RegisterviewComponent } from './_components/registerview/registerview.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './_components/home/home.component';
import { AppnavigationComponent } from './_components/appnavigation/appnavigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { appInitializer } from 'src/app/_helpers/appinitializer';
import { AuthorizationService } from './_services/authorize/authorization.service';
import { ErrorInterceptor  } from './_helpers/error.interceptor';
import { JwtinterceptInterceptor  } from './_helpers/jwtintercept.interceptor';
import { ProjectlistComponent } from './_components/projects/projectlist/projectlist.component';
import { ProjectdetailComponent } from './_components/projects/projectdetail/projectdetail.component';
import { VerifyemailComponent } from './_components/verifyemail/verifyemail.component';
import { ProjectmodalComponent } from './_components/projects/projectmodal/projectmodal.component';
import { BlobModule } from 'angular-azure-blob-service';
import { AgentsComponent } from './_components/agents/agents.component';
import { LoginLayoutComponent } from './_components/login-layout/login-layout.component';
import { MainLayoutComponent } from './_components/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginviewComponent,
    RegisterviewComponent,
    HomeComponent,
    AppnavigationComponent,
    ProjectlistComponent,
    ProjectdetailComponent,
    VerifyemailComponent,
    ProjectmodalComponent,
    AgentsComponent,
    LoginLayoutComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BlobModule.forRoot()
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthorizationService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtinterceptInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  entryComponents: [ProjectmodalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
