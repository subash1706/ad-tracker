import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,NgForm, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  AddGroup!:FormGroup;
  alldata : any;
  Content: any = {
    topic:'',
    Message:''
  }
  object: any;


  constructor(private fb:FormBuilder,private api:ApiserviceService) { }

  ngOnInit(): void {
    this.AddGroup = this.fb.group({
      Topic:['',Validators.required],
      message:['',Validators.required]
    })
  }

  addcontent(FormValue:NgForm){
    this.api.addcontentdata(FormValue).subscribe((_data)=>{
      alert("Content added Successfully");
      this.AddGroup.reset();
    },rej=>{
      console.log("Error" + rej);
    });
    console.log(FormValue);
  }
  

}
