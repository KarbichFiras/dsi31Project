import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddcategoriesService {

  constructor(private http :HttpClient) { }
  
  addCategorie(body){
   return  this.http.post('https://jsonplaceholder.typicode.com/todos',body)
  }
}
