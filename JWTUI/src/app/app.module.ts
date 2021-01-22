import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/authentication/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthGuardServiceService } from './auth-guard-service.service';


import { AuthenticationModule } from './modules/authentication/authentication.module';
import { ComponentModule } from './modules/components/component.module';
import { RouterModule, Routes } from '@angular/router';

const route: Routes=[];


@NgModule({
  declarations: [
    AppComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    ComponentModule,
    RouterModule.forRoot(route)
    
  ],
  providers: [AuthGuardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
