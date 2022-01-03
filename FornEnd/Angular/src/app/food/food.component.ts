import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../Services/Apis/food.service';
import { CartService } from '../Services/Shared/cart.service';

import{FoodExtraCategorie} from './models/FoodExtraCategorie'


const PANIER_KEY : string ="Panier";
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  restaurantCode;
  foodExtraCategs;
  restoname;
  foodWithExtras;
  

  constructor(private route: ActivatedRoute, private foodService:FoodService, 
    private cartService: CartService) { }

  ngOnInit(): void {
      this.getRestaurantCode();
      this.getFoodsByRestaurantCode();      
    
  }

  
  ajouterAuPanier(restoname,foodname){
    
   

  }

  getRestaurantCode() {
    this.route.params.subscribe(params=>{
      this.restaurantCode = params.code;
      })
  }

  getFoodsByRestaurantCode() {
    this.foodService.getFoodExtraCategorie(this.restaurantCode).subscribe(data=>{
     // console.log(data);
  
      //catch the data from the server
      let jsonObject=data;
      //cast data json object to our ch9af de type FoodExtraCategorie
      let foodExtraCategs:FoodExtraCategorie = <FoodExtraCategorie>jsonObject;
      //affecter le variable local "ch9af" global maanaha 
      this.foodExtraCategs=foodExtraCategs;
      //affichina name of resto "namer howa  ism resto fel back"
      this.restoname=this.foodExtraCategs[0].namer;
      // this.restoname=this.foodExtraCategs.array[0].namer;
    })
  }
}
