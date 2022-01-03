import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http : HttpClient) { }

  getRestaurants(){

    // return this.http.get('http://localhost:8080/restaurants/getAllRestaurants');
    return this.http.get('http://localhost:8080/restaurants/getAllRestaurants');
// 

  }

  getRestaurant(code: bigint){
    return this.http.get('http://localhost:8080/restaurants/getRestaurantByCode/'+code);
    // return this.http.get('http://localhost:8081/api/restaurants/getRestaurantByCode/'+code);

  }

  getRestaurantByName(partnameResto: String){
    return this.http.get('http://localhost:8080/restaurants/getSpecificRestaurant?partnameResto='+partnameResto);
    // return this.http.get('http://localhost:8081/api/restaurants/getSpecificRestaurant?partnameResto='+partnameResto);
  }
  getRestaurantByFood(partLibelleFood : string){
    return this.http.get('http://localhost:8080//restaurants/getRestaurantByFood?partLibelleFood='+partLibelleFood);

    // return this.http.get('http://localhost:8081/api/restaurants/getRestaurantByFood?partLibelleFood='+partLibelleFood);
    }
}
