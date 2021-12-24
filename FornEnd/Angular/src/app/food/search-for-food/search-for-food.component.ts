import { Component, OnInit } from '@angular/core';
import{ AddFoodsService } from '../../Services/add-foods.service'
import { Food } from '../models/food';

@Component({
  selector: 'app-search-for-food',
  templateUrl: './search-for-food.component.html',
  styleUrls: ['./search-for-food.component.css']
})
export class SearchForFoodComponent implements OnInit {

  foods : any;
  
  constructor(private addfoodsservice:AddFoodsService) { }

  ngOnInit(): void {
 this.getAllFoods();
  }

  getAllFoods(){
 this.addfoodsservice.getAllFoods().subscribe(data=>{
     this.foods = data;
   });
  }
}
