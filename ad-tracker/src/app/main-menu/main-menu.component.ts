import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
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
  }
  



