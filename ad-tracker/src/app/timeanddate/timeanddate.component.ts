import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-timeanddate',
  templateUrl: './timeanddate.component.html',
  styleUrls: ['./timeanddate.component.css']
})
export class TimeanddateComponent implements OnInit {
  dateTime:any;

  constructor(public api:ApiserviceService) {}

  ngOnInit(): void {
    this.dateTime = new Date
  }
}
