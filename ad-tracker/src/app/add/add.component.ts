import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import{ ToastrService} from 'ngx-toastr';
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
  formObj:any;


  constructor(private fb:FormBuilder,private api:ApiserviceService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.AddGroup = this.fb.group({
      Topic:['',Validators.required],
      message:['',Validators.required],
      view:[''],
      like:['']
    })
  }

  addcontent(FormValue:any){
    this.formObj={
      Topic:FormValue.Topic,
      like:0,
      message:FormValue.message,
      view:0
    }
    console.log(this.formObj);
    this.api.addcontentdata(this.formObj).subscribe((_data)=>{
      this.toastr.success("success","Content added Successfully")
      this.AddGroup.reset();
    },rej=>{
      console.log("Error" + rej);
      this.toastr.error("Failed","Content cannot be added Successfully")
    });
    console.log(this.formObj);
  }
  

}
