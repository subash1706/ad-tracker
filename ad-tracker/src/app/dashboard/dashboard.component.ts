import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import{ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
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

  
  

  constructor(public api:ApiserviceService, private fb:FormBuilder,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.EditGroup = this.fb.group({
      Topic:['',Validators.required],
      message:['',Validators.required],
      id:['',Validators.required],
      rev:['',Validators.required],
      view:[''],
      like:[]
    })
    this.get();
        this.api.getContact().subscribe(data=>{
      console.log('Data was fetching');
      this.contactdata=data;
      this.contactdata=this.contactdata.docs;
      for(const obj of this.contactdata){
            this.contact.push(obj);
            console.log('Fetched successfuly in add component')
      }
    });
  
  }

  get(){
    this.api.getUser().subscribe(data=>{
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.docs;
      for(const obj of this.alldata){
            this.object.push(obj);
            console.log('Fetched successfuly in add component')
      }
    });

  }

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

    })

  }


  update(FormValue:any){
    this.createObj={
      Topic:FormValue.Topic,
      _id:FormValue.id,
      like:FormValue.like,
      message:FormValue.message,
      _rev:FormValue.rev,
      view:FormValue.view
    }
    this.api.updateData(this.createObj).subscribe(res=>{
      console.log("Your data was updated successfully!");
      this.object=[];
      this.get();
      alert('your data was Updated successfully');
    },rej=>{
      console.log("can not update....."+rej);
    })
    
  }


  deletecontent(data:any,data1:any){
    this.api.deleteContentTopicMessage(data._id,data1._rev).subscribe(_res=>{
      this.toastr.success("Done","Content deleted successfully");
      setInterval(()=>{
      location.reload()
      },1000);
    },rej =>{
      this.toastr.error("Error","Content cannot be deleted" +rej);
    })
  }
  deletecontact(data:any,data1:any){
    this.api.deleteContact(data._id,data1._rev).subscribe(_response=>{
      this.toastr.success("Done","Content deleted successfully");
      setInterval(()=>{
        location.reload()
        },1000);
    },rej =>{
      this.toastr.error("Error","Content cannot be deleted" +rej);
    })
  }
}

