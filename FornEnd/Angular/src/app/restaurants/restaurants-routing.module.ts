import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantsComponent } from './restaurants.component';

const routes: Routes = [
  
  { path: 'all', component: AllComponent },
  { path: 'restaurantDetails/:code', component: RestaurantDetailsComponent },
  { path: '',   redirectTo: 'all', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
