import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {  
  value:boolean=true;
  object:any =[];
  alldata:any;
  isShow: any;
  viewPost:any;
  likePost:any;  
  constructor(public api:ApiserviceService) { }
   
    count1(){
      this.api.count1++;
    }
    count2(){
      this.api.count2++;
    }
    count3(){
      this.api.count3++;
    }    
    like1(){
      this.api.like1++;
    }
    like2(){
      this.api.like2++;
    }
    like3(){
      this.api.like3++;
    }
}
