import { Component, OnInit } from '@angular/core';
import { RESTAURANTS } from '../models/restaurantsList';
import { RestaurantsService } from '../../Services/Apis/restaurants.service'
import { SharedRestaurantsService } from '../../Services/Shared/restaurant.service'
import { Router } from '@angular/router';
import { FoodsSahredService } from 'src/app/Services/Shared/foodsSahred.service';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  restaurants;
  foods;

  constructor(private restaurantsService : RestaurantsService, private sharedRestaurantsService:SharedRestaurantsService, private router:Router,private foodShared :FoodsSahredService) { }
  
  ngOnInit(): void {

    // always update changes when there new result of restaurant(new result come due search bar )
    
      this.getRestaurants();
    
    this.sharedRestaurantsService.currentrestaurant.subscribe(data =>{
      console.log(data)
        this.restaurants=data;
      });
    this.foodShared.currentFoods.subscribe(data => {
        this.foods=data;
    })

  }
 
  getRestaurants() {
    this.restaurantsService.getRestaurants().subscribe((data) => {
      this.restaurants = data;
      this.sharedRestaurantsService.setRestaurants(data);
    });
  }

  getDetails(code: bigint){
    this.router.navigate(["food/foodResto",code]);
  }

  
}
