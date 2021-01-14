import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private auth: AuthenticationService, private http: HttpClient) { }
  jwt : any;
  endPoint: string="http://localhost:8080"
  getWelcomePage(){
    console.log("in getWelcomePage");
    
    this.jwt=this.auth.getToken() || "";
    console.log("JWT "+this.jwt);
    
  const url=`${this.endPoint}/welcome`
  console.log("url "+url);
  
  
  
  return this.http.get(url);
  }
}
