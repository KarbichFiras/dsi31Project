import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import { RESTAURANTS } from '../models/restaurantsList';
import { SharedRestaurantsService } from '../../Services/Shared/restaurant.service'

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  restaurantCode  ;
  restaurants = this.sharedRestaurantsService.getRestaurants();
  restaurant;
  
  constructor(private route: ActivatedRoute, private sharedRestaurantsService:SharedRestaurantsService) { }

  ngOnInit(): void {
      this.getRestaurantCode();
      this.getRestaurant();
      console.log(this.restaurantCode);
  }

  getRestaurantCode() {
    this.route.params.subscribe(params=>{
      this.restaurantCode = params.id;
    })
  }

  getRestaurant(){
    this.restaurants.forEach( (resteau) =>{
      if(resteau.code == this.restaurantCode){
        this.restaurant = resteau;
      }
    } );
  }

}
