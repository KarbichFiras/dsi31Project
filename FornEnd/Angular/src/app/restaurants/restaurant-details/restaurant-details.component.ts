import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import { RESTAURANTS } from '../models/restaurantsList';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  restaurantCode : string ="";
  restaurants = RESTAURANTS ;
  restaurant  : Restaurant = {
    code : "",
    adresse : "",    
    email : "",
    enabled : false,
    name : "",
    image_code : "",
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe(params=>{
        this.restaurantCode = params.id;
        //console.log(this.restaurantCode);
      })
      this.getRestaurant(this.restaurantCode);
  }

  getRestaurant(restaurantCode : string){
      let restauIndex = this.fetchRetsaurant(restaurantCode);
     
      this.restaurant = this.restaurants[restauIndex];

  }

  fetchRetsaurant(restaurantCode : string):number{
    let restauIndex :number = -1;
    
    this.restaurants.forEach(function(r,index){
      if(r.code === restaurantCode){
        restauIndex = index;
      }
    });

    return restauIndex;
  }

}
