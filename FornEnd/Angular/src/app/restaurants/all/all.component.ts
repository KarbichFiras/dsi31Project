import { Component, OnInit } from '@angular/core';
import { RESTAURANTS } from '../models/restaurantsList';
import { RestaurantsService } from '../../Services/Apis/restaurants.service'
import { SharedRestaurantsService } from '../../Services/Shared/restaurant.service'
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  restaurants;

  constructor(private restaurantsService : RestaurantsService, private sharedRestaurantsService:SharedRestaurantsService) { }
  
  ngOnInit(): void {
    this.getRestaurants(); 
  }

  getRestaurants() {
    this.restaurantsService.getRestaurants().subscribe((data) => {
      this.restaurants = data;
      this.sharedRestaurantsService.setRestaurants(data);
    });
  }
}
