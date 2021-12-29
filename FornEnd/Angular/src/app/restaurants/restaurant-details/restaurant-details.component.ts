import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../Services/Apis/restaurants.service'
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
  
  constructor(private route: ActivatedRoute, private sharedRestaurantsService:SharedRestaurantsService, private restaurantsService:RestaurantsService) { }

  ngOnInit(): void {
      this.getRestaurantCode();
      this.getRestaurant(this.restaurantCode);
      console.log(this.restaurantCode);
  }

  getRestaurantCode() {
    this.route.params.subscribe(params=>{
      this.restaurantCode = params.id;
    })
  }

  getRestaurant(code: bigint){
    this.restaurantsService.getRestaurant(code).subscribe(data=>{
      console.log(data);
      this.restaurant = data;
    });
  }

}
