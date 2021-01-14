import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthenticationService } from '../authentication.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private authService: AuthenticationService, private router: Router, private formBuilder: FormBuilder) { 
   
  }

  loginForm: any;
  isSubmitted  =  false;
 



  ngOnInit(): void {

    this.loginForm=new FormGroup({
      username : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    });
  }
  onLogin(){



      this.authService.loginUser(this.loginForm.value).subscribe(data => {
        console.log("Login successful");
        console.log(data);

        console.log("Extracted  "+data['jwt']);
        
        if(data['jwt']) {
          this.authService.setToken(data['jwt']);
          this.router.navigate(['/welcome']);
        }
        
      });
      
  }

}


