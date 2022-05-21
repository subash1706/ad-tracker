import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }
  postdata(formObject:any){
    return this.http.post('http://localhost:8080/post_query',formObject)
  }
}

