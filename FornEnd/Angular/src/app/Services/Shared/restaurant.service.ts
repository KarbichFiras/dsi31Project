import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurant;

  constructor() { }

  setRestaurant(restaurant){
    this.restaurant = restaurant;
  }

  getRestaurant(){
    return this.restaurant;
  }

}
