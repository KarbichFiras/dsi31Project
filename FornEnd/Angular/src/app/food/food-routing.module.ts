import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food.component';
import { ProductComponent } from './product/product.component';
import { SearchForFoodComponent } from './search-for-food/search-for-food.component';

const routes: Routes = [
  { path: 'search_for_food', component:SearchForFoodComponent },
  { path: 'foodResto/:code', component:FoodComponent },
  { path: 'foodResto/:code/product/:code', component:ProductComponent },
  { path: '', component: FoodComponent }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
