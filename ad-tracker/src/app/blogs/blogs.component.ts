import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { FormGroup} from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  providers: [DatePipe]
})
export class BlogsComponent implements OnInit {
  AddGroup!:FormGroup;
  value:boolean=true;
  object:any =[];
  adduser!:FormGroup;
  alldata:any;
  isShow: any;
  isclose:any;
  viewPost:any;
  likePost:any;
  time: any;
  viewtrack:any;
  
  constructor(public api:ApiserviceService, public dateTime:DatePipe) { 

  }
  ngOnInit(): void {
    this.object=[];
    this.get();
  }
  get(){
    this.api.getUser().subscribe(data=>{
      this.alldata=data;
      this.alldata=this.alldata.docs;
      for(const i of this.alldata){
            this.object.push(i);
      }
    });
  }
    count(view:any){
      this.viewPost={
        Topic: view.Topic,
        like: view.like,
        message: view.message,
        view: view.view+1,
        _id: view._id,
        _rev: view._rev,
        lastview: view.lastview
      }
      this.api.updateData(this.viewPost).subscribe(_res=>{
        this.object=[];
        this.get();
      })
      this.api.count++;
    }
    like(like:any){
      this.viewPost={
        Topic: like.Topic,
        like: like.like+1,
        message: like.message,
        view: like.view,
        _id: like._id,
        _rev: like._rev
      }
      this.api.updateData(this.viewPost).subscribe(_response=>{
        this.object=[];
        this.get();
      })
    }
    timedate(){
 
      let currentDateTime =this.dateTime.transform((new Date), 'MM/dd/yyyy h:mm:ss');
      this.time = currentDateTime;
      console.log(this.time);
    }
    timeupdate(lastview:any){
      this.viewtrack={
        Topic: lastview.Topic,
        like: lastview.like+1,
        message: lastview.message,
        view: lastview.view,
        _id: lastview._id,
        _rev: lastview._rev,
        lastview:lastview.time = this.time
      }
    }
   
    previousData(){
      this.isShow = !this.isShow; 
    }
    closedata(){
      this.isclose = !this.isclose;
    }
}
