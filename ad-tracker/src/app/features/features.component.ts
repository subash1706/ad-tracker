import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  
  value:boolean=true;
  object:any =[];
  alldata:any;
  isShow: any;
  viewPost:any;
  likePost:any;
  
  constructor(public api:ApiserviceService) { 

  }
  ngOnInit(): void {
    console.log();
  }
  
    
    count1(){
      this.api.count1++;
      console.log(this.api.count1);
    }
    count2(){
      this.api.count2++;
      console.log(this.api.count2);
    }
    count3(){
      this.api.count3++;
      console.log(this.api.count3);
    }

    
    like1(){
      this.api.like1++;
      console.log(this.api.like1);
    }
    like2(){
      this.api.like2++;
      console.log(this.api.like2);
    }
    like3(){
      this.api.like3++;
      console.log(this.api.like3);
    }
    previousWeekData(){
      console.log("Previous Button Clicked");
      this.isShow = !this.isShow; 
    }

    

 
 

}
