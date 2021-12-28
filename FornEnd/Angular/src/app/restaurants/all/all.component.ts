import { Component, OnInit } from '@angular/core';
import { RESTAURANTS } from '../models/restaurantsList';
import { RestaurantsService } from '../../Services/restaurants.service'

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  restaurants = RESTAURANTS;
  R ;
  
  
  constructor(private restaurantsService : RestaurantsService) { }

  ngOnInit(): void {
    this.restaurantsService.getRestaurants().subscribe((data) => {
      this.R = data;
    });
  }


}
