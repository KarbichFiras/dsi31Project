import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { SearchForFoodComponent } from './search-for-food/search-for-food.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    FoodComponent,
    SearchForFoodComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    HttpClientModule
  ]
})
export class FoodModule { }
