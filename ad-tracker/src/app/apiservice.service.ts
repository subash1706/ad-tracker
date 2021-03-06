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
  loginForm(){
    return this.http.get('http://localhost:8000/loginForm');
  }
  contactDetails(formObject:any){
    return this.http.post<any>('http://localhost:8000/contactDetails',formObject);
  }

  addContentData(formObject:any){
    return this.http.post('http://localhost:8000/addContentData',formObject);
  }
  getUser(){
    return this.http.get('http://localhost:8000/getContent');
  }
  //
  //
  // getTime(){
  //   return this.http.get('http://localhost:8000/getTime');
  // }
  

  //
  //
  getContact(){
    return this.http.get('http://localhost:8000/getContact');
  }
  editContent(id2:any){
    return this.http.get(`http://localhost:8000/editContent/${id2}`);
  }
  updateData(doc:any){
    return this.http.put('http://localhost:8000/update_query/',doc);
  }
  deleteContentTopicMessage(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/deleteContentTopicMessage/${id}/${id1}`);
  }  
  deleteContact(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/deleteContentTopicMessage/${id}/${id1}`);
  }
}

