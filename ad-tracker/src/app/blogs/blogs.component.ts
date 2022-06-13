import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
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
        _rev: view._rev
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
    previousData(){
      this.isShow = !this.isShow; 
    }
}
