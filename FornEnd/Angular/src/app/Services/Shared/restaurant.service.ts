import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Restaurant } from 'src/app/restaurants/models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class SharedRestaurantsService {

  restaurants;

  constructor() { }
  
  private restaurantSource = new  BehaviorSubject(this.getRestaurants);
  currentrestaurant = this.restaurantSource.asObservable();

  getRestaurants(){
    return this.restaurants;
  }
 
  setRestaurants(restaurants){
    this.restaurantSource.next(restaurants)
  //  this.restaurants = restaurants;
  }
}
