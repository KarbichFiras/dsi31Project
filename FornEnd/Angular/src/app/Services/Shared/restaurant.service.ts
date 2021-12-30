import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Restaurant } from 'src/app/restaurants/models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class SharedRestaurantsService {

  restaurants;

  constructor() { }
  

  

  getRestaurants(){
    return this.restaurants;
  }
  private restaurantSource = new  BehaviorSubject(this.getRestaurants);
  currentrestaurant = this.restaurantSource.asObservable();

  setRestaurants(restaurants){
    this.restaurantSource.next(restaurants)
  //  this.restaurants = restaurants;
  }
}
