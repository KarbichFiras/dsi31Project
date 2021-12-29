import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http : HttpClient) { }

  addUser(body){
   return this.http.post('http://localhost:8081/api/auth/register',body);
  }

}
