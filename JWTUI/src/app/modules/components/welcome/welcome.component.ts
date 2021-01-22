import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../welcome.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route : Router, private service: WelcomeService) { }
  response: any;
  welcomeForm: any;
  message : any;
  ngOnInit(): void {
    this.welcomeForm= new FormGroup({
      welcome : new FormControl('')
    });
  }
  onClick(){
    
    console.log("clicked in onClick");

    this.service.getWelcomePage().subscribe((item)=>{
      console.log("Here we have got from"+item);
        this.message=item.valueOf();
    });
    
   // console.log("Respones  "+JSON.parse(this.response));
   //this.route.navigate(['/success']);
    

  }
  
}
