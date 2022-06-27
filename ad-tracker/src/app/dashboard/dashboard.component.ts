import { Component, OnInit ,NgModule } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import{ToastrService} from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { BlogsComponent } from '../blogs/blogs.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[BlogsComponent,DatePipe]
})
export class DashboardComponent implements OnInit {
  countdisplay = this.api.count;
  AddGroup!:FormGroup;
  value:boolean=true;
  object:any =[];
  contact:any=[];
  adduser!:FormGroup;
  alldata:any=[];
  editform!:FormGroup;
  id:any;
  rev:any;
  edit:any;
  editdata:any=[];
  topic: any;
  message: any;
  EditGroup!:FormGroup;
  contactdata:any=[];
  replyGroup!:FormGroup;
  createObj:any;  
  time:any;
  alltime:any;

  constructor(public api:ApiserviceService, private fb:FormBuilder,private toastr:ToastrService, public dateTime:BlogsComponent) { }

  ngOnInit(): void {
    this.EditGroup = this.fb.group({
      Topic:['',Validators.required],
      message:['',Validators.required],
      id:['',Validators.required],
      rev:['',Validators.required],
      view:[''],
      like:[],
      lastview:[],
    })
  console.log(this.dateTime.time);
    this.get();
        this.api.getContact().subscribe(data=>{
      this.contactdata=data;
      this.contactdata=this.contactdata.docs;
      for(const obj of this.contactdata){
            this.contact.push(obj);
      }
    });  
  }
  get(){
    this.api.getUser().subscribe(data=>{
      this.alldata=data;
      this.alldata=this.alldata.docs;
      for(const obj of this.alldata){
            this.object.push(obj);
      }
    });
  }
  // getTime(){
  //   this.api.getTime().subscribe(data=>{
  //     console.log('hi');
  //     this.alltime=data;
  //     this.alltime=this.alltime.docs;
  //     for(const obj1 of this.alltime){
  //           this.object.push(obj1);
  //     }
  //   });
  // }
  

  editcontent(data2:any,data3:any){
    this.id=data2;
    this.rev=data3; 
    this.api.editContent(data2)
    .subscribe(response => {
      this.editdata=response;
      this.EditGroup.controls['Topic'].setValue(this.editdata.Topic);
      this.EditGroup.controls['message'].setValue(this.editdata.message);
      this.EditGroup.controls['id'].setValue(this.editdata._id);
      this.EditGroup.controls['rev'].setValue(this.editdata._rev);
      this.EditGroup.controls['view'].setValue(this.editdata.view);
      this.EditGroup.controls['like'].setValue(this.editdata.like);
      this.EditGroup.controls['lastview'].setValue(this.editdata.lastview);
    });
  }
  // timedate(){
  //   let currentDateTime =this.Datetime.transform((new Date), 'MM/dd/yyyy h:mm:ss');
  //   this.time = currentDateTime;
  //   console.log(this.time);
  // }



  update(FormValue:any){
    this.createObj={
      Topic:FormValue.Topic,
      _id:FormValue.id,
      like:FormValue.like,
      lastviewed:FormValue.lastview,
      message:FormValue.message,
      _rev:FormValue.rev,
      view:FormValue.view
    } 
    this.api.updateData(this.createObj).subscribe(_res=>{
      this.object=[];
      this.get();
    },rej=>{
      this.toastr.error('Error',"can not update"+rej);
    })
    
  }


  deletecontent(data:any,data1:any){
    this.api.deleteContentTopicMessage(data._id,data1._rev).subscribe(_res=>{
      this.toastr.success("Done","Content deleted successfully");
      setInterval(()=>{
      location.reload()
      },100);
    },rej =>{
      this.toastr.error("Error","Content cannot be deleted" +rej);
    })
  }
  
  
}

