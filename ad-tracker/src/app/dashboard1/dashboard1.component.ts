import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit {
  AddGroup!:FormGroup;
  alldata : any;
  Content: any = {
    topic:'',
    Message:''
  }


  constructor(private fb:FormBuilder,private api:ApiserviceService) { }

  ngOnInit(): void {
    this.AddGroup = this.fb.group({
      Topic:['',Validators.required],
      message:['',Validators.required]
    })
  }
  addcontent(FormValue:NgForm){
    this.api.addcontentdata(FormValue).subscribe((data)=>{
      alert("Content added Successfully");
      this.AddGroup.reset();
    },rej=>{
      console.log("Error" + rej);
    });
    console.log(FormValue);
  }

}
