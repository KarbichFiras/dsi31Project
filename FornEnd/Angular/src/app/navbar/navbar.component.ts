import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/Apis/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  logout(){
    this.loginService.deleteUserData();
  }

}
