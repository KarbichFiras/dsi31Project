import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http : HttpClient) { }

  getRestaurants(){

    return this.http.get('http://localhost:8081/getAllRestaurants');

      /*const restaurants = [
          {
            code : "1",
            adresse : "Bizerte",    
            email : "restaurant1@gmail.com",
            enabled : true,
            name : "restaurant1",
            image_code : "1",
        },
        {
            code : "2",
            adresse : "Bizerte",    
            email : "restaurant2@gmail.com",
            enabled : true,
            name : "restaurant2",
            image_code : "2",
        },
      ]
      return restaurants;
      */
  }

}
