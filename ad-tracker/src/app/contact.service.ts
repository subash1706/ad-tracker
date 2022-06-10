import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }
  sendemail(formobject:any){
    console.log('hello');
    return this.http.post('http://localhost:8080/email/',formobject)
  }
  sendmail(formobject:any){
    console.log('hi');
    return this.http.post('http://localhost:8080/mail/',formobject)
  }




}

