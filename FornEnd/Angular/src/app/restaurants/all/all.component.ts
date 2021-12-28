import { Component, OnInit } from '@angular/core';
import { RESTAURANTS } from '../models/restaurantsList';
import { RestaurantsService } from '../../Services/Apis/restaurants.service'

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  restaurants;

  constructor(private restaurantsService : RestaurantsService) { }

  ngOnInit(): void {
    this.restaurantsService.getRestaurants().subscribe((data) => {
      console.log(data);
      this.restaurants = data;
    });
  }
}
