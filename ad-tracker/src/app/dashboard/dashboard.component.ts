import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm } from '@angular/forms';
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
  alldata:any;
  editform!:FormGroup;
  

  constructor(private api:ApiserviceService) { }

  ngOnInit(): void {

    this.api.getUser().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.docs;
      console.log(this.alldata);
      for(const i of this.alldata){
            this.object.push(i);
            console.log('Fetched successfuly in add component')
      }
    });
  }
  editcontent(data2:any){
    this.api.editcontent(data2._id2)
    console.log(data2._id);
  }
  deletecontent(data:any,data1:any){
    this.api.deletecontenttopicmessage(data._id,data1._rev).subscribe(res=>{
      location.reload()
    })
  }
  //--//
  onEdit(obj:any){
    this.editform.controls['Topic'].setValue(obj.Topic);
    this.editform.controls['message'].setValue(obj.message);
 
  }

  update(formvalue:NgForm){
    console.log(formvalue);
    this.api.updatedata(formvalue).subscribe(res=>{
      console.log("Your data was updated successfully!");
      alert('your data was Updated successfully')
    },rej=>{
      console.log("can not update....."+rej);
    })

  }

}

