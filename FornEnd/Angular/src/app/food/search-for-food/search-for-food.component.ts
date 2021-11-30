import { Component, OnInit } from '@angular/core';
import { FOOD } from '../models/food-list';

@Component({
  selector: 'app-search-for-food',
  templateUrl: './search-for-food.component.html',
  styleUrls: ['./search-for-food.component.css']
})
export class SearchForFoodComponent implements OnInit {

  foods = FOOD;
  
  constructor() { }

  ngOnInit(): void {
  }

}
