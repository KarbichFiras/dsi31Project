import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }


  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  addUser(body){
     return this.http.post('https://jsonplaceholder.typicode.com/todos/',body);
  }

  updateUser(body,id){
   return this.http.put('https://jsonplaceholder.typicode.com/todos/'+id,body);
  }
  deleteUser(id){
    return this.http.delete('https://jsonplaceholder.typicode.com/todos/'+id);
  }
}
