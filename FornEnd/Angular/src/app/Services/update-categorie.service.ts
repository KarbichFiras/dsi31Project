import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateCategorieService {

  constructor(private http : HttpClient) { }
  updateCategorie(body){
    const putParams = new HttpParams().set('id','id')
    
   return  this.http.put('https://jsonplaceholder.typicode.com/todos/1',body,{params :putParams})

  }
}
