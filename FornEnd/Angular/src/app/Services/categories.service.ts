import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http :HttpClient) { }
  getAllCategories(){
    //return this.http.get("http://localhost:8079/getAllCategorie")
    const categorie = [
          {
            code : "1", 
            name : "sandwish",
          },
          {
            code : "2", 
            name : "plat",
          }
      ]
      return categorie;
      
  }
}
