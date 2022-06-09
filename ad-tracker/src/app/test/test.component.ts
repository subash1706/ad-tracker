import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }

  constructor() { }

  ngOnInit(): void {
  }

}
