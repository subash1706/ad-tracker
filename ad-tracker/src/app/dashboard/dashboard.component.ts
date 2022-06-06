import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  AddGroup!:FormGroup;
  value:boolean=true;
  object:any =[];
  adduser!:FormGroup;
  alldata:any=[];
  editform!:FormGroup;
  data2:any;
  edit:any;
  editdata:any;
  topic: any;
  message: any;
  EditGroup!:FormGroup;
  

  constructor(private api:ApiserviceService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.EditGroup = this.fb.group({
      Topic:['',Validators.required],
      message:['',Validators.required]
    })
    //----//
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


  editcontent(data2:any){
    this.api.editcontent(data2)
    .subscribe(response => {
      this.editdata=response;
      console.log(this.editdata);
      this.topic = this.editdata.Topic;
      this.message = this.editdata.message;
    })

  }


  update(FormValue:NgForm){
    console.log(FormValue);
    this.api.updatedata(FormValue).subscribe(res=>{
      console.log("Your data was updated successfully!");
      alert('your data was Updated successfully')
    },rej=>{
      console.log("can not update....."+rej);
    })

  }

  deletecontent(data:any,data1:any){
    this.api.deletecontenttopicmessage(data._id,data1._rev).subscribe(_res=>{
      location.reload()
    })
  }
}

