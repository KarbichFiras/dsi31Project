import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import {PaymentsComponent } from "./payments/payments.component";
import {AddfoodComponent} from "./addfood/addfood.component";
import {PanierComponent} from "./panier/panier.component";
import { SearchFComponent } from "./search-f/search-f.component" 
import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from './notfound/notfound.component' 

  const routes : Routes =[
      { path: '',   redirectTo: 'payments', pathMatch: 'full' },
      {path :"home" , component : HomeComponent },
      {path :"payments" , component : PaymentsComponent },
      {path :"addfood" , component : AddfoodComponent },
      {path :"panier" , component : PanierComponent },
      {path :"searchForSpecificFood" , component: SearchFComponent },
      { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
      { path: 'restaurants', loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule) },
      {path :"**" , component: NotfoundComponent },
      
    ];

@NgModule({
  declarations: [
    NotfoundComponent
  ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
