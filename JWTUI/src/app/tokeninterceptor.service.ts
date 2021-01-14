import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class TokeninterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req, next) {
   console.log("In the interceptor");
   //const re= "/login";

   //if(req.url.search(re)=== -1){
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer token.s.1'
      }
    })
     return next.handle(tokenizedReq)
  // }

  }
}
