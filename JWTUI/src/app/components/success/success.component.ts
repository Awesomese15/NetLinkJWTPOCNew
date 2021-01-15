import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../welcome.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private service : WelcomeService) { }
  message : any;
  ngOnInit(): void {
    this.service.getWelcomePage().subscribe((item)=>{
      console.log("Here we have got from"+item);
        this.message=item.valueOf();
    }

    )
  }

}
