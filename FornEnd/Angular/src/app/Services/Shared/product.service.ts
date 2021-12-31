import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedProductService {

  product;

  private productSource = new BehaviorSubject(this.getProduct);
  currentProduct = this.productSource.asObservable();
  
  constructor() { }

  getProduct(){
    return this.product;
  }

  setProduct(product){
    this.productSource.next(product);
  }

}
