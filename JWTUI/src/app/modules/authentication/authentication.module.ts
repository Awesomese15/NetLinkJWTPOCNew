import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationRouterModule } from './authentication-router.module';
import { AuthenticationService } from './authentication.service';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    
    AuthenticationRouterModule
  ], 
  providers:[AuthenticationService],
  exports: [AuthenticationRouterModule, LoginComponent]
})
export class AuthenticationModule { }
