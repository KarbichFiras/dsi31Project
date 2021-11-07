import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import {PaymentsComponent } from "./payments/payments.component";
import {AddfoodComponent} from "./addfood/addfood.component";
import {PanierComponent} from "./panier/panier.component";
import { SearchFComponent } from "./search-f/search-f.component" 

  const routes : Routes =[
      {path :"payments" , component : PaymentsComponent },
      {path :"addfood" , component : AddfoodComponent },
      {path :"panier" , component : PanierComponent },
      {path :"searchForSpecificFood" , component: SearchFComponent },
    ];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
