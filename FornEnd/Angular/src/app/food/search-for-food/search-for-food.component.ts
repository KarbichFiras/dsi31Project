import { Component, OnInit } from '@angular/core';
import{ AddFoodsService } from '../../Services/add-foods.service'
import { FoodService } from 'src/app/Services/Apis/food.service';
import { Food } from '../models/food';

@Component({
  selector: 'app-search-for-food',
  templateUrl: './search-for-food.component.html',
  styleUrls: ['./search-for-food.component.css'],
  providers:[FoodService]
})
export class SearchForFoodComponent implements OnInit {

  foods : any;
  
  constructor(private addfoodsservice:AddFoodsService,private foodService:FoodService) { }

  ngOnInit(): void {
 this.getAllFoods();
 
  }

  getAllFoods(){
 this.foodService.getAllFoods().subscribe(data=>{
 
     this.foods = data;
   });
  }

  addFood(){
    const body = {
     userId: 3,
     id: 4,
     title: "NEw user",
     body: "sgfrsdgsd" 
   }

this.addfoodsservice.addFood(body).subscribe(data=>{
  this.foods = data;
  console.log("add food succesfully");
})   
         }

         updateFood(){
          const body = {
            userId: 1,
         
            title: "NEw upadated user", 
            body: "qaerzqaerfzt" 
           }
           this.addfoodsservice.updateFood(body,3).subscribe(data =>{
            console.log("updated food succesfully",body);
            });
        }

        deleteFood(){
          this.addfoodsservice.deleteFood(1).subscribe(data =>{
            console.log("delete food succesfully");
            });
        }





}

