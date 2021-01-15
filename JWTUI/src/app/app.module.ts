import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './authentication/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthGuardServiceService } from './auth-guard-service.service';

import { Routes, RouterModule } from '@angular/router';

import { WelcomeService } from './components/welcome.service';
import { AuthenticationService } from './authentication/authentication.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SuccessComponent } from './components/success/success.component';
import { TokeninterceptorService } from './tokeninterceptor.service';





const appRoutes:Routes = [

  
]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    SuccessComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuardServiceService, WelcomeService, AuthenticationService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokeninterceptorService,
    multi: true,
    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
