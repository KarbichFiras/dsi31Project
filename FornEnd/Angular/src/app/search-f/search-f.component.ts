import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from '../Services/Apis/signup.service';
import{ FormsModule } from '@angular/forms';
import { RestaurantsService } from '../Services/Apis/restaurants.service';
import { SharedRestaurantsService } from '../Services/Shared/restaurant.service';
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
  SearchBy;
  constructor(private restaurantsService : RestaurantsService,private sharedRestaurantsService:SharedRestaurantsService) { }

  ngOnInit(): void {
    if(this.sharedRestaurantsService.getRestaurants() == null){
      this.getRestaurants();  
    }else{
      this.restaurants=this.sharedRestaurantsService.getRestaurants();

      this.sharedRestaurantsService.currentrestaurant.subscribe(data =>{
        this.restaurants=data;
      });
    }
  }
  //EVENTS
  //fired when add caracter in the search bar
  onKey(event: any){

    if(event.target.value != " "){
      if( this.SearchBy =="restaurant" ){
       
          console.log(event.target.value);
          this.getRestaurantByName(event.target.value);
        
        }
      else {
        if(event.target.value != " "){
          console.log(event.target.value);
          this.getRestaurantByFood(event.target.value);
               
      }
    }
  }else{
        
      this.getRestaurants();
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
//
}
