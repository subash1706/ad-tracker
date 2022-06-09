import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  
  constructor(public api:ApiserviceService) { 

  }
    count(){
      this.api.count++;
      console.log(this.api.count);
    }
    count1(){
      this.api.count1++;
      console.log(this.api.count1);
    }
    count2(){
      this.api.count2++;
      console.log(this.api.count2);
    }
 
  ngOnInit(): void {
    console.log();
  }

}
