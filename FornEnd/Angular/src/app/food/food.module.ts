import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { SearchForFoodComponent } from './search-for-food/search-for-food.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FoodComponent,
    SearchForFoodComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    HttpClientModule
  ]
})
export class FoodModule { }
