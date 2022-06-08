import { Component, OnInit } from '@angular/core';
import { FormBuilder,NgForm,FormGroup,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiserviceService } from '../apiservice.service';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  data:any;
  contactGroup!:FormGroup;


  constructor(private fb: FormBuilder,private api:ApiserviceService,private contact:ContactService,private toastr:ToastrService) { }
  

  ngOnInit(): void {
       this.contactGroup = this.fb.group({
      fname:['',Validators.required],
      contactnumber:['',Validators.required],
      email:['',Validators.required],
      message:['',Validators.required]
    })
    
  }
  sendemail(Formvalue:NgForm){
    console.log("Hello");
    console.log(Formvalue);
    this.contact.sendemail(Formvalue).subscribe((data:any)=>{
      console.log(data);
    })
    }
  sendmail(Formvalue:NgForm){
    console.log("Hii");
    console.log(Formvalue);
    this.contact.sendmail(Formvalue).subscribe((data:any)=>{
      console.log(data);
    })
    }
    reloadCurrentPage() {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      
     }

     contactdetails(Formvalue:NgForm){
      console.log(Formvalue);
       this.api.contactdetails(Formvalue).subscribe((data)=>{
         console.log(data);
         this.toastr.success('Success',"Contact Details Added ");
       },rej=>{
        this.toastr.error('Error',"Contact Details NotAdded ");
       console.log("Error"+rej);
       });
       
       }
     }

