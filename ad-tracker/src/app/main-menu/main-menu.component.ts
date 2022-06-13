import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private fb:FormBuilder,private api:ApiserviceService) {
    //main-menu//
   }

  ngOnInit(): void {
      //mainmenu//
    }
  }
  



