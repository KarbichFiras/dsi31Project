import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { SignupService } from '../Services/Apis/signup.service';
import{ FormsModule } from '@angular/forms';
import { RestaurantsService } from '../Services/Apis/restaurants.service';
import { SharedRestaurantsService } from '../Services/Shared/restaurant.service';
import { FoodsSahredService } from '../Services/Shared/foodsSahred.service';
import { FoodService } from '../Services/Apis/food.service';
@Component({
  selector: 'app-search-f',
  templateUrl: './search-f.component.html',
  styleUrls: ['./search-f.component.css']
})
export class SearchFComponent implements OnInit {

  signupForm;
  username;
  email;
  password;
  acceptedTerms;
  restaurants;
  foods;
  SearchBy;
  constructor(private restaurantsService : RestaurantsService,private sharedRestaurantsService:SharedRestaurantsService,
    private foodShared :FoodsSahredService,private foodService:FoodService) { }

  ngOnInit(): void {
    //in restaurant page
    if(this.sharedRestaurantsService.getRestaurants() == null){
      this.getRestaurants();  
    }else{
      this.restaurants=this.sharedRestaurantsService.getRestaurants();

      this.sharedRestaurantsService.currentrestaurant.subscribe(data =>{
        this.restaurants=data;
      });
    }
///in foods page
  if(this.foodShared.getFoods() == null){
    this.getAllFoods(); 
  }else{
    this.foods=this.foodShared.getFoods();

    this.foodShared.currentFoods.subscribe(data =>{
      this.foods=data;
    });
  }
  }
  //EVENTS
  //fired when add caracter in the search bar
  onKey(event: any){

    //par defaut
    // this.getRestaurantByFood(event.target.value);
    // this.getFoodByPartName(event.target.value);
    if(event.target.value != " "){
      if( this.SearchBy =="restaurant" ){
       
          console.log(event.target.value);
          this.getRestaurantByName(event.target.value);
        
        }
      else {
          console.log(event.target.value);
          this.getRestaurantByFood(event.target.value);
          this.getFoodByPartName(event.target.value);
               
      }
    }
  else{
        
      this.getRestaurants();
      this.getAllFoods();
      } 
     

      
 }

 searchMethod(value) {
  this.SearchBy= value.target.value 
}
//fired when submit the form
  search(form:NgForm){
  }
 // EVENTS//
//call SERVCIES
  getRestaurantByName(restaurant_name :String){
    // this.router.navigate(["restaurants/restaurantDetails",code]);
    this.restaurantsService.getRestaurantByName(restaurant_name).subscribe(data => {
      console.log(data); 
      this.restaurants = data;
      this.sharedRestaurantsService.setRestaurants(data);
    })
  }
  getRestaurants() {
    this.restaurantsService.getRestaurants().subscribe((data) => {
      this.restaurants = data;
      this.sharedRestaurantsService.setRestaurants(data);
    });
  }
  getRestaurantByFood(foodName : string){
    this.restaurantsService.getRestaurantByFood(foodName).subscribe(data => {
      this.restaurants = data;
      this.sharedRestaurantsService.setRestaurants(data);
    })
  }
    getAllFoods(){
 this.foodService.getAllFoods().subscribe(data=>{
 
     this.foods = data;
   });
  }
 
  getFoodByPartName(foodname :String){
    this.foodService.getFoodByPartName(foodname).subscribe(data => {
      console.log(data); 
      this.foods = data;
      this.sharedRestaurantsService.setRestaurants(data);
    })
  }
//
}
