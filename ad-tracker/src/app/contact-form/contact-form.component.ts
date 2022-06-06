import { Component, OnInit } from '@angular/core';
import { FormBuilder,NgForm,FormGroup,Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  formGroup!: FormGroup;
  empRecord: any={
    name: '',
    contactnumber: '',
    email: '',
    message: '',
  };

  constructor(private fb: FormBuilder,private api:ContactService,) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: [this.empRecord.name,Validators.required],
      contactnumber: [this.empRecord.contactnumber,Validators.required],
      email: [this.empRecord.email,Validators.required],
    })
  }
  sendmail(Formvalue:NgForm){
    console.log("Hello");
    console.log(Formvalue);
    this.api.sendmail(Formvalue).subscribe((_data:any)=>{
      console.log(Formvalue);
    })
    }
}
