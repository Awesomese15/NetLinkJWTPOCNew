import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuardServiceService } from './auth-guard-service.service';
import { SuccessComponent } from './components/success/success.component';


const routes: Routes = [
 
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path : 'login',
    component : LoginComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
   
  },
  {
    path: 'success',
    component: SuccessComponent,
    canActivate : [AuthGuardServiceService]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
