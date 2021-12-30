import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food.component';
import { SearchForFoodComponent } from './search-for-food/search-for-food.component';

const routes: Routes = [
  { path: 'search_for_food', component:SearchForFoodComponent },
  { path: '/:id', component: FoodComponent }
  // food of this actuel restaurant
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
