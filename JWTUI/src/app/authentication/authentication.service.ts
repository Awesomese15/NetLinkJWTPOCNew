import { Injectable } from '@angular/core';

import * as jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



export const TOKEN_NAME:string = "jwt_token";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  

  authServiceEndpoint:string = "http://localhost:8081/authenticate";
  token:any;

  constructor(private http: HttpClient) { }

  loginUser(user: any):Observable<any> {
    const url = `${this.authServiceEndpoint}/login`;
    return this.http.post(url, user);
  }

  setToken(token:string) {
    return localStorage.setItem(TOKEN_NAME, token);
  }
  getToken() {
    console.log("getToken "+localStorage.getItem(TOKEN_NAME));
    
    return localStorage.getItem(TOKEN_NAME);
  }

  isTokenPresent(){
    return !! localStorage.getItem(TOKEN_NAME);
  }

  deleteToken() {
    return localStorage.removeItem(TOKEN_NAME);
  }

  getTokenExpirationDate(token: string) {
    const decoded = jwt_decode(token);
    if(decoded.exp === undefined) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) {
      token = this.getToken() || "";
    }
    if(!token) {
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    if(date === undefined || date === null) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }

}
