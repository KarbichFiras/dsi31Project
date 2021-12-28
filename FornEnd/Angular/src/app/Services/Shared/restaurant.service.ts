import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedRestaurantsService {

  restaurants;

  constructor() { }

  setRestaurants(restaurants){
    this.restaurants = restaurants;
  }

  getRestaurants(){
    return this.restaurants;
  }

}
