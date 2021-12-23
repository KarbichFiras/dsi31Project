import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http : HttpClient) { }

  getRestaurants(){

    const headers = new HttpHeaders().set("Authorization","Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6ZWQiLCJleHAiOjE2NDEwNTQxMDN9.F5x5DlGScvE4my1SGVc5AlTNMfbsrL96qcNLnrS9a-2Nq_yYKIScAqr-jyUCxiH5E-UslBkQQWlNjL08N7FUYQ");

    return this.http.get('https://localhost:8079/getAllRestaurants', {headers, responseType: 'text' as 'json'});

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
