import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/food/models/product';

const PANIER_KEY : string ="Panier";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Product[] = [];
  numItemmsInCart = new BehaviorSubject(this.cartItems); // 3titou empty array 5ater length te3ou bch ykoun 0 milouwel
  constructor() { }

  //method qui crrer le panier dans le localStorage avec 0 valeurs ==> just bch tasna3ha
  private create(){
    localStorage.setItem(PANIER_KEY,"");
  }

  // method qui sauvegarde le panier dans le localStorage
  private save(data){
    localStorage.setItem(PANIER_KEY,data);
  }

  // method qui delete the panier from  the localStorage ==> tfase5ha jimla ma33neha mouch tfare8ha 
  private remove(){
    localStorage.removeItem(PANIER_KEY);
  }

  addToPanier(new_data){
    // making sure that our variable panier is empty
    this.cartItems = [];
    // variable contains the old data stored in the localstorage
    let old_data;
    //cheking if panier exists and has content
    if(old_data = this.get() != null){
       //we add the new data to the old one
        old_data.push(new_data);
        //then we save it into the local storage
        this.save(old_data);
    }else{//panier does not exist or has no content
      // we create it to make sure
      this.create();
      // now we can add to panier
      this.addToPanier(new_data);
    }

  }

  get(){
    // making sure that our variable panier is empty
    this.cartItems = [];
    // variable contains the old data stored in the localstorage
    let data ;
    // check if panier exists in the local storage and has content
    if( ( data = localStorage.getItem(PANIER_KEY)) != null ) {
      // ajouter a l'array panier
      this.cartItems.push(data) ;
      // return the array
      return this.cartItems;
    }
    return null;
  }

  addItem(product:Product){
    // will check if the item is already exist into the cart array
      const exist = this.cartItems.find(item=>{
        // if cartItems aslan fiha 7ajja ka wa9tha ntasti est ce que lproduct deja mawjoud fiha ou nn
        if(item!=null){
          let itemCode = item.restaurantName + item.food.libelle;
          let productCode = product.restaurantName + product.food.libelle;
          return itemCode === productCode; 
        }
        return false;// false => product does not already exist in cartItems
      });

      // if the item does exist
      if(exist){
        // we just need to increase the quantite instead of adding the same food twice in the cart ;)
        exist.quantiteFood++;
      }else{
        // if the item does not exist into the cart
        // we append it into the cart 
        product.quantiteFood = 1
        this.cartItems.push(product);
      }
      this.numItemmsInCart.next(this.cartItems);
      //console.log(this.cartItems);
  }

}
