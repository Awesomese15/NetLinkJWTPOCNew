import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AuthGuardServiceService } from 'src/app/auth-guard-service.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes=[
    {
        path : '',
        children:[
            {
                path: 'welcome',
                component: WelcomeComponent,
                canActivate: [AuthGuardServiceService]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })



export class ComponentRouter{}