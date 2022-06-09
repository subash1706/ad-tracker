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
  

  constructor(public api:ApiserviceService, private fb:FormBuilder,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.EditGroup = this.fb.group({
      Topic:['',Validators.required],
      message:['',Validators.required],
      id:['',Validators.required],
      rev:['',Validators.required]
    })
    this.get();
        this.api.getcontact().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.contactdata=data;
      this.contactdata=this.contactdata.docs;
      console.log(this.contactdata);
      for(const obj of this.contactdata){
            this.contact.push(obj);
            console.log('Fetched successfuly in add component')
      }
      console.log(this.object);
    });
  }

  get(){
    this.api.getUser().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.docs;
      console.log(this.alldata);
      for(const obj of this.alldata){
            this.object.push(obj);
            console.log('Fetched successfuly in add component')
      }
      console.log(this.object);
    });

  }

  editcontent(data2:any,data3:any){
    this.id=data2;
    this.rev=data3;
    this.api.editcontent(data2)
    .subscribe(response => {
      this.editdata=response;
      console.log(this.editdata);
      this.EditGroup.controls['Topic'].setValue(this.editdata.Topic);
      this.EditGroup.controls['message'].setValue(this.editdata.message);
      this.EditGroup.controls['id'].setValue(this.editdata._id);
      this.EditGroup.controls['rev'].setValue(this.editdata._rev);

    })

  }


  update(FormValue:any){
    console.log(FormValue);
    this.api.updatedata(FormValue).subscribe(res=>{
      console.log(res);
      console.log("Your data was updated successfully!");
      this.object=[];
      this.get();
      alert('your data was Updated successfully');
    },rej=>{
      console.log("can not update....."+rej);
    })

  }


  deletecontent(data:any,data1:any){
    this.api.deletecontenttopicmessage(data._id,data1._rev).subscribe(_res=>{
      this.toastr.success("Done","Content deleted successfully");
      location.reload()
    })
  }
  deletecontact(data:any,data1:any){
    this.api.deletecontact(data._id,data1._rev).subscribe(_res=>{
      this.toastr.success("Done","Content deleted successfully");
      location.reload()
    })
  }
}

