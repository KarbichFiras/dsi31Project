import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{ LoginService } from '../../Services/Apis/login.service';
import { LoginInfo } from '../models/Login-info';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  username;
  password;
  
  isLoginFailed = false;
  errorMessage = "";
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  login(loginForm:NgForm){

    this.loginService.login(new LoginInfo(this.username, this.password))
    .pipe(first()).subscribe(// first() ma3neha bch ye5ou just awil resulta tarja3lou
      data => {
        // madem d5alna lihna ma3neha famma data raj3et (wmihech error 5ater famma error lout tcatchih) w3malna login bil s7i7
        this.isLoginFailed = false;
        console.log(data);
        this.router.navigate([""]);
      },
      error=>{
        this.errorMessage = error.message;
        console.log(error.message);
        this.isLoginFailed = true;
      }
    );
  }

}


