import { Component, OnInit } from '@angular/core';
import { RESTAURANTS } from '../models/restaurantsList';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  restaurants = RESTAURANTS;

  constructor() { }

  ngOnInit(): void {
  }

  getRestaurants():typeof RESTAURANTS{
    return this.restaurants;
  }

}
