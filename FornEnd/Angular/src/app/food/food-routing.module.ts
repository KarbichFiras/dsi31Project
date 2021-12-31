import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food.component';
import { SearchForFoodComponent } from './search-for-food/search-for-food.component';

const routes: Routes = [
  { path: 'search_for_food', component:SearchForFoodComponent },
  { path: 'foodResto/:code', component:FoodComponent },
  { path: '', component: FoodComponent }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
