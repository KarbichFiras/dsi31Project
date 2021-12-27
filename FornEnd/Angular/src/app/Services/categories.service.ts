import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http :HttpClient) { }
  getAllCategories(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
   /* const categorie = [
          {
            code : "1", 
            name : "sandwish",
          },
          {
            code : "2", 
            name : "plat",
          }
      ]
      return categorie;*/
      
  }
}
