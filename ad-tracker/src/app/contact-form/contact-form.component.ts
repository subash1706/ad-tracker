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
    this.contact.sendemail(Formvalue).subscribe((data:any)=>{
      this.toastr.success('Success','Email sent successfully')
    })
    }
  sendmail(Formvalue:NgForm){
    this.contact.sendmail(Formvalue).subscribe((data:any)=>{
    })
    }
    reloadCurrentPage() {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      
     }

     contactdetails(Formvalue:NgForm){
       this.api.contactDetails(Formvalue).subscribe((data)=>{
         this.toastr.success('Success',"Contact Details Added ");
       },rej=>{
        this.toastr.error('Error',"Contact Details NotAdded "+rej);
       });
       
       }
     }

