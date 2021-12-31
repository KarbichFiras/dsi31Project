import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';




import { AddfoodComponent } from './addfood/addfood.component';
import { SearchFComponent } from './search-f/search-f.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesService } from './Services/categories.service';
import { AddcategoriesComponent } from './categories/addCategories/addcategories.component';
import { AddcategoriesService } from './Services/addcategories.service';
import { UpdateCategorieComponent } from './categories/updateCategorie/update-categorie/update-categorie.component';
import { UpdateCategorieService } from './Services/update-categorie.service';
import { DeleteCategorieComponent } from './categories/delete-categorie/delete-categorie.component';
import{ FormsModule } from '@angular/forms';
import { UsersService } from './Services/users.service';
import { AuthInterceptorService } from './Services/Interceptors/auth-interceptor.service';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    AddfoodComponent,
    SearchFComponent,
    HomeComponent,
    CategoriesComponent,
    AddcategoriesComponent,
    UpdateCategorieComponent,
    DeleteCategorieComponent,
    CartComponent,
    PaymentComponent,
    
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [CategoriesService,AddcategoriesService,UpdateCategorieService,UsersService,
    { provide :  HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
],
  bootstrap: [AppComponent]
})
export class AppModule {}
