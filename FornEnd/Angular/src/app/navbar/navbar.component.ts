import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/Apis/login.service';
import { NavbarService } from '../Services/Shared/navbar.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, public nav: NavbarService) { }

  ngOnInit(): void {
    
  }

  logout(){
    this.loginService.deleteUserData();
    this.router.navigate(['authentication/login']);
  }

}
