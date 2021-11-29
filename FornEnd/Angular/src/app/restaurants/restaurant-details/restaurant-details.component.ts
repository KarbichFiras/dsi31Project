import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  restaurantCode : string ="";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe(params=>{
        this.restaurantCode = params.id;
        console.log(this.restaurantCode);
      })
  }

}
