import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  register!:FormGroup;
  value:boolean=true;
  object:any =[];
  adduser!:FormGroup;
  alldata:any;

   
  constructor(private fb:FormBuilder,private api:ApiserviceService) {
      this.register = this.fb.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email_id:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required],
      contact_no:['',Validators.required],

    })
   }

  ngOnInit(): void {
  
  }
 
  // Register(Formvalue:NgForm){
  //   console.log(Formvalue);
  //   this.api.signup(Formvalue).subscribe(data =>{
  //   console.log(data);
  //   })
    
  // }
  // getuser(){
  //   this.api.getUser().subscribe(data=>{
  //     console.log(data);
  //     console.log('Data was fetching');
  //     this.alldata=data;
  //     this.alldata=this.alldata.rows;
  //     console.log(this.alldata);
  //     for(const i in this.alldata){
  //       if(Object.prototype.hasOwnProperty.call(this.alldata,i)){
  //         const elt = this.alldata[i];
  //         console.log(elt.id);
  //         this.api.getUserId(elt.id).subscribe(res=>{
  //           console.log(res);
  //           this.object.push(res);
  //           console.log('Fetched successfuly in add component');
  //         })
  //       }

  //     }
    
  //   })
  // }
  }