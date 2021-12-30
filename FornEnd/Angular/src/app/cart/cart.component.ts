import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurants/models/restaurant';
import { Food } from '../food/models/food';
import { FoodExtraCategorie } from '../food/models/FoodExtraCategorie';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  restaurantStr;
  foodStr;
  food_extra_categorie_list: FoodExtraCategorie[] = [];
  constructor() { }

  ngOnInit(): void {

    //nijbid tous les {food avec ses deatail ili d5alilhom mil session
    this.foodStr =sessionStorage.getItem("FoodExtraCategorie");
    if (this.restaurantStr) {
      this.food_extra_categorie_list= JSON.parse(this.foodStr);//lisr->objet->(attribut+list)
    }

  }
  
}
