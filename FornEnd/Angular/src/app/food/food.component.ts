import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../Services/Apis/food.service';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  restaurantCode : string ="";
  foodExtraCateg;
  constructor(private route: ActivatedRoute,private foodService:FoodService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.restaurantCode = params.id;
      
      //console.log(this.restaurantCode);
      // this.foodService.getffods().subscribe(data=>{
      //   this.foodExtraCateg=data;
      // })
    })
  }

  
}
