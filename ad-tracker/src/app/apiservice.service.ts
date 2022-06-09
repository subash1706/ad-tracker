import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  count=0;
  count1=0;
  count2=0;
  count3=0;
  like=0;
  like1=0;
  like2=0;
  like3=0;  
  constructor(private http: HttpClient) { }
  addadmindata(formObject:any){
    return this.http.post<any>('http://localhost:8000/add-admin',formObject);
  }
  
  loginForm(){
    return this.http.get('http://localhost:8000/loginForm');
  }
  contactdetails(formObject:any){
    console.log(formObject);
    return this.http.post<any>('http://localhost:8000/contactdetails',formObject);
  }

  addcontentdata(formObject:any){
    return this.http.post('http://localhost:8000/addcontentdata',formObject);
  }
  getUser(){
    return this.http.get('http://localhost:8000/getcontent');
  }
  getcontact(){
    return this.http.get('http://localhost:8000/getcontact');
  }
  editcontent(id2:any){
    console.log("hello",id2)
    return this.http.get(`http://localhost:8000/editcontent/${id2}`);
  }
  updatedata(doc:any){
    console.log(doc);
    return this.http.put('http://localhost:8000/update_query/',doc);
  }


  deletecontenttopicmessage(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/deletecontenttopicmessage/${id}/${id1}`);

  }
  
  deletecontact(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/deletecontenttopicmessage/${id}/${id1}`);

  }



}

