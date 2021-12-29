import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Apis/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,private loginService: LoginService) { }

  canActivate() {
    if (!this.loginService.isAuthenticated()){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
