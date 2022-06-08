import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,MinLengthValidator,NgForm,Validators } from '@angular/forms';
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
      email:['',[Validators.required]],
      password:['',[Validators.required]]

    })
  }

signupdata(FormValue:NgForm){
  this.api.addadmindata(FormValue).subscribe((data)=>{
    console.log(data);
    alert("Signed Up successfully");
    this.signup.reset();
  },rej=>{
    console.log("Error" + rej);
  });
  console.log(FormValue);
}
}

 
