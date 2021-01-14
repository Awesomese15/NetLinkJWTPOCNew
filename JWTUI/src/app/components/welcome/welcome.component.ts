import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../welcome.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private service : WelcomeService ,private route : Router) { }
  response: any;
  ngOnInit(): void {
    
  }
  onClick(){
    this.response=this.service.getWelcomePage();

   // console.log("Respones  "+JSON.parse(this.response));
   this.route.navigate(['/success']);
    

  }
  
}
