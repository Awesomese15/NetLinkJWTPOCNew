import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './modules/authentication/authentication.service';

@Injectable()
export class AuthGuardServiceService implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate() {

    if(this.authService.isTokenPresent()) {
      console.log(("token present"));
      
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
