import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http : HttpClient) { }

  getRestaurants(){

    return this.http.get('http://localhost:8081/getAllRestaurants');

  }

}
