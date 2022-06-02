import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  AddGroup!:FormGroup;
  value:boolean=true;
  object:any =[];
  adduser!:FormGroup;
  alldata:any;

  constructor(private fb:FormBuilder,private api:ApiserviceService) { }

  ngOnInit(): void {

    this.api.getUser().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.docs;
      console.log(this.alldata);
      for(const i of this.alldata){
          // const elt = this.alldata[i];
          // console.log(elt)
            this.object.push(i);
            console.log('Fetched successfuly in add component')
      }
    });
  }

  deletecontent(data:any,data1:any){
    this.api.deletecontenttopicmessage(data._id,data1._rev).subscribe(res=>{
      location.reload()
    })
  }

}

