import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import {PaymentsComponent } from "./payments/payments.component";
import {AddfoodComponent} from "./addfood/addfood.component";
import {PanierComponent} from "./panier/panier.component";
import { SearchFComponent } from "./search-f/search-f.component" 
import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from './notfound/notfound.component' 
import { CategoriesComponent } from './categories/categories.component';
import { AddcategoriesComponent } from './categories/addCategories/addcategories.component';  
import { UpdateCategorieComponent } from './categories/updateCategorie/update-categorie/update-categorie.component';
import { DeleteCategorieComponent } from './categories/delete-categorie/delete-categorie.component';
import { AuthGuardService as AuthGuard } from './Services/Guards/auth-guard.service';
const routes : Routes =[

      { path: '',   redirectTo: 'home', pathMatch: 'full' },
      {path :"home" , component : HomeComponent },
      {path :"payments" , component : PaymentsComponent},
      {path :"addfood" , component : AddfoodComponent , canActivate:[AuthGuard] },
      {path :"panier" , component : PanierComponent , canActivate:[AuthGuard] },
      {path :"searchForSpecificFood" , component: SearchFComponent },
      {path :"searchForSpecificFood" , component: SearchFComponent },
      {path :"categorie" , component: CategoriesComponent },
      {path :"categorie/addcategorie" , component: AddcategoriesComponent , canActivate:[AuthGuard] },
      {path :"categorie/updatecategorie" , component: UpdateCategorieComponent , canActivate:[AuthGuard] },
      {path :"categorie/deletecategorie" , component: DeleteCategorieComponent , canActivate:[AuthGuard] },
      { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
      { path: 'restaurants', loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule) },
      { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
      { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
      { path: 'food', loadChildren: () => import('./food/food.module').then(m => m.FoodModule) },
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
