import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/Apis/login.service';
import { CartService } from '../Services/Shared/cart.service';
import { NavbarService } from '../Services/Shared/navbar.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  numItemmsInCart: number = 0;

  constructor(private loginService: LoginService, private router: Router, public nav: NavbarService, private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.numItemmsInCart.subscribe(numItemmsInCart =>{
      this.numItemmsInCart = numItemmsInCart;
      console.log("number of items in cart is : " + numItemmsInCart);
    })
  }

  logout(){
    this.loginService.deleteUserData();
    this.router.navigate(['authentication/login']);
  }

}
