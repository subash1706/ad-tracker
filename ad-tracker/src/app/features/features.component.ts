import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  AddGroup!:FormGroup;
  value:boolean=true;
  object:any =[];
  adduser!:FormGroup;
  alldata:any;
  isShow: any;
  viewPost:any;
  likePost:any;
  
  constructor(public api:ApiserviceService) { 

  }
  ngOnInit(): void {
    console.log();
    this.object=[];
    this.get();
  }
  get(){
    this.api.getUser().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.docs;
      console.log(this.alldata);
      for(const i of this.alldata){
            this.object.push(i);
            console.log(i);
            console.log('Fetched successfuly in add component')
      }
    });
  }
    count(view:any){
      console.log(view._id);
      this.viewPost={
        Topic: view.Topic,
        like: view.like,
        message: view.message,
        view: view.view+1,
        _id: view._id,
        _rev: view._rev
      }
      console.log(this.viewPost);
      this.api.updatedata(this.viewPost).subscribe(res=>{
        console.log("count increase ",res);
        this.object=[];
        this.get();
      })
      this.api.count++;
      console.log(this.api.count);
    }
    like(like:any){
      console.log(like._id);
      this.viewPost={
        Topic: like.Topic,
        like: like.like+1,
        message: like.message,
        view: like.like,
        _id: like._id,
        _rev: like._rev
      }
      console.log(this.viewPost);
      this.api.updatedata(this.viewPost).subscribe(res=>{
        console.log("count increase ",res);
        this.object=[];
        this.get();
      })
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
