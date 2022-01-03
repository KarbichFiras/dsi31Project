import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';
import { AllComponent } from './all/all.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { SearchFComponent } from '../search-f/search-f.component';

@NgModule({
  declarations: [
    RestaurantsComponent,
    AllComponent,
    RestaurantDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    

  ]
})
export class RestaurantsModule { }
