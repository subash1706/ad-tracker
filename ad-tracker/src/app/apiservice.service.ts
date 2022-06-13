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
  addAdminData(formObject:any){
    return this.http.post<any>('http://localhost:8000/add-Admin',formObject);
  }
  
  loginForm(){
    return this.http.get('http://localhost:8000/loginForm');
  }
  contactDetails(formObject:any){
    console.log(formObject);
    return this.http.post<any>('http://localhost:8000/contactDetails',formObject);
  }

  addContentData(formObject:any){
    return this.http.post('http://localhost:8000/addContentData',formObject);
  }
  getUser(){
    return this.http.get('http://localhost:8000/getContent');
  }
  getContact(){
    return this.http.get('http://localhost:8000/getContact');
  }
  editContent(id2:any){
    console.log("hello",id2)
    return this.http.get(`http://localhost:8000/editContent/${id2}`);
  }
  updateData(doc:any){
    console.log(doc);
    return this.http.put('http://localhost:8000/updateData/',doc);
  }


  deleteContentTopicMessage(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/deleteContentTopicMessage/${id}/${id1}`);

  }
  
  deleteContact(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/deleteContentTopicMessage/${id}/${id1}`);

  }



}

