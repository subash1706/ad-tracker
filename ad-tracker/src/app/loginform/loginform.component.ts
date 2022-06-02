import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  loginForm!:FormGroup;
  signdata:any;
  object:any=[];
  flag = 0;
  notify= '';
  alldata: any;
  



  constructor(private  http:HttpClient,private formbuilder:FormBuilder, private router:Router,private api:ApiserviceService) { }

  ngOnInit(): void {  
    this.api.loginForm().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.docs;
      console.log(this.alldata);
      for(const i of this.alldata){
          // const elt = this.alldata[i];
          // console.log(elt.id);
          // this.api.getUserId(elt.id).subscribe(res=>{
            // console.log(res);
            this.object.push(i);
            console.log('Fetched successfuly');
      //     })
      // }
      }
    })

 this.loginForm = this.formbuilder.group(
  {
    'Username':['',Validators.required],
    'password':['',Validators.required],

  }
);
}

alogin(formvalue:any){
for(const i  of this.object){
if(i.fname ==  formvalue.Username && i.password == formvalue.password){
    this.flag = 1;
}
}
if(this.flag == 1 ){
this.router.navigate(['/dashboard']);
}
else{
  this.notify = "invalid user..";
}
  }
}

