import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getFoodExtraCategorie(code: string){
    let p=new HttpParams().set('code',code);
    return this.http.get('http://localhost:8081/api/restaurants/getFooddeatildByRestaurant',{params:p});
  }

  getAllFoods(){
   
    return this.http.get('http://localhost:8080/getAllFoods');
  }

}
