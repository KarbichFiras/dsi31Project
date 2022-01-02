import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/food/models/Product';

const CART_KEY : string ="Cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  placeHolder: Product[] = [];
  cartItems = new BehaviorSubject([]); // 3titou empty array 5ater length te3ou bch ykoun 0 milouwel
  numItemmsInCart = new BehaviorSubject(this.getNumItemmsInCart());

  constructor() { 
    const ls = JSON.parse( localStorage.getItem(CART_KEY) || '{}');
    if(ls){
      //this.cartItems.next(ls.length);
    }
  }


  addItem(product:Product){
    let ls = localStorage.getItem(CART_KEY) ;
    
    let exist = false;
    
    if(ls != '{}' ){
      
      let p:Product[] =  JSON.parse(ls || '{}');
    
      for(let i=0; i<p.length;i++){
        let itemCode = p[i].restaurantName + p[i].food.libelle;
        let productCode = product.restaurantName + product.food.libelle;
          // will check if the item is already exist into the cart
          if( itemCode === productCode ){
            exist = true;
            p[i].quantiteFoodWithExtras++;
            break;
          }
      }
      
      if(exist){
        localStorage.setItem(CART_KEY,  JSON.stringify(p));
        this.numItemmsInCart.next(p.length);
      }else{
        let new_data = Array.from(p);
        
        product.quantiteFoodWithExtras = 1 ;
        new_data.push(product);
        localStorage.setItem(CART_KEY, JSON.stringify(new_data));
        this.numItemmsInCart.next(new_data.length);
      }
      
      

    }else{
      // creat ethe cart in the ls
      localStorage.setItem(CART_KEY,"");
      this.addItem(product);
    }
    
  }

  setNumItemmsInCart(numItemmsInCart){
    this.cartItems.next(numItemmsInCart);
  }

  getNumItemmsInCart(){
    if(!localStorage.getItem(CART_KEY)){
      return 0;
    }
    let ls = JSON.parse(localStorage.getItem(CART_KEY) || "{}" ); 
    return ls.length+1;
  }

}
