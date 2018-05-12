import { SubjectService } from './_services/subjectService.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent, SlidebarComponent, HomeLayoutComponent } from './shared';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { AuthGuard } from './_guards';
import { MockBackend } from '@angular/http/testing';
import { AuthenticationService } from './_services/authentication.service';
import { ConfigValue } from './_helpers/config-value';
import { JwtInterceptor } from './_helpers/JwtInterceptor';
import { TeacherService } from './_services/teacherService.service';
import { StructureTestDetailService } from './_services/structureTestDetailService.service';

const APP_COMPONENTS = [
  HeaderComponent,
  SlidebarComponent
];

const APP_CONTAINERS = [
  HomeLayoutComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    StartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    ConfigValue,
    AuthenticationService,
    TeacherService,
    SubjectService,
    StructureTestDetailService,
    BaseRequestOptions,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
