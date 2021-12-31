import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/Services/Apis/product.service';
import { CartService } from 'src/app/Services/Shared/cart.service';
import { SharedProductService } from 'src/app/Services/Shared/product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {// product ma3neha 1 food , samitou product 5aterkom samitou lModule food -_-
  
  product  = this.sharedProductService.getProduct();
  libelle: string = "";
  numItemmsInCart:number=0;

  constructor(private route:ActivatedRoute, private productService: ProductService,
    private cartService:CartService, private sharedProductService: SharedProductService) { }

  ngOnInit(): void {
    // recuperer le libelle du food a partir de lurl
    this.getProductCode();
    // get the Product from the backend
    this.getProduct();

    // 2) ta3mil subscribe 3al sharedService bch tnajem ta9ra minou wtafikti lil this.prodcut ;)
    this.sharedProductService.currentProduct.subscribe(data =>{
      this.product = data;
    });
    
  }
 
  getProduct() {
    this.productService.getProduct(this.libelle).subscribe(data => {
      // 1) t5abih fil sharedService ili heya 3ibara 3la ch9af gloal 
      this.sharedProductService.setProduct(data);

      this.cartService.numItemmsInCart.subscribe(cart =>{
        this.numItemmsInCart = cart.length;
        //console.log("number of items in cart is : " + data);
      })
    });
  }

  getProductCode() {
    this.route.params.subscribe(params=>{
      this.libelle = params.code;
    })
  }

  ajouterAuPanier(product: Product){
    // tajoutih lil panier
    this.cartService.addItem(product);
  }


}
