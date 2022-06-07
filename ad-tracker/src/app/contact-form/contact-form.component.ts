import { Component, OnInit } from '@angular/core';
import { FormBuilder,NgForm,FormGroup,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  data:any;
  contactGroup!:FormGroup;


  constructor(private fb: FormBuilder,private api:ApiserviceService,private toastr:ToastrService) { }
  

  ngOnInit(): void {
       this.contactGroup = this.fb.group({
      fname:['',Validators.required],
      contactnumber:['',Validators.required],
      email:['',Validators.required],
    })
    
  }
  sendemail(Formvalue:NgForm){
    console.log("Hello");
    console.log(Formvalue);
    this.api.sendemail(Formvalue).subscribe((data:any)=>{
      console.log(data);
    })
    }
  sendmail(Formvalue:NgForm){
    console.log("Hii");
    console.log(Formvalue);
    this.api.sendmail(Formvalue).subscribe((data:any)=>{
      console.log(data);
    })
    }
    reloadCurrentPage() {
      window.location.reload();
     }

     contactdetails(Formvalue:NgForm){
       this.api.contactdetails1(Formvalue).subscribe((_data)=>{
         this.toastr.success('Success',"Contact Details Added ");
       },rej=>{
        this.toastr.error('Error',"Contact Details NotAdded ");
       console.log("Error"+rej);
       });
       console.log(Formvalue)
       }
     }

