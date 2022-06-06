import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }
  signupdata(formObject:any){
    return this.http.post('http://localhost:8080/post_query',formObject);
  }
  
  loginForm(){
    return this.http.get('http://localhost:8080/loginForm');
  }
  addcontentdata(formObject:any){
    return this.http.post('http://localhost:8080/addcontentdata',formObject);
  }
  getUser(){
    return this.http.get('http://localhost:8080/getcontent');
  }
  editcontent(id2:any){
    console.log("hello",id2)
    return this.http.get(`http://localhost:8080/editcontent/${id2}`);
  }
  updatedata(doc:any){
    console.log(doc);
    return this.http.put('http://localhost:8000/update_query/',doc);
  }


  deletecontenttopicmessage(id:any,id1:any){
    return this.http.delete(`http://localhost:8080/deletecontenttopicmessage/${id}/${id1}`);

  }


}

