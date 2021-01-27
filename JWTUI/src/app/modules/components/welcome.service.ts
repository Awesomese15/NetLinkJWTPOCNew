import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private auth: AuthenticationService, private http: HttpClient) { }
  jwt : any;
  endPoint: string=environment.baseUrl;
  getWelcomePage(){
    console.log("in getWelcomePage");
    
    this.jwt=this.auth.getToken() || "";
    console.log("JWT "+this.jwt);
    
  const url=`${this.endPoint}/welcome`
  console.log("url "+url);
  
  
  
  return this.http.get(url, {responseType : 'text'});
  }
}
