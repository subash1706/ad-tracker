import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup!:FormGroup;
  record: any = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirm_password: '',
    contact_number: ''

  }
  
  constructor(private fb:FormBuilder,private api:ApiserviceService) {
      
   }

  ngOnInit(): void {
    this.signup = this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      email:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]],
      confirm_password:['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]],            
      contact_number:['',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]]

    })
  }

signupdata(FormValue:NgForm){
  this.api.signupdata(FormValue).subscribe((_data)=>{
    alert("Signed Up successfully");
    this.signup.reset();
  },rej=>{
    console.log("Error" + rej);
  });
  console.log(FormValue);
}
}

 
