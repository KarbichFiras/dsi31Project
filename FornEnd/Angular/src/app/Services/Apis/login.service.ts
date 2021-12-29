import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LoginInfo } from 'src/app/authentication/models/Login-info';
import { map } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/authentication/token/token-storage.service'
import { BehaviorSubject, Observable } from 'rxjs';

  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  const TOKEN_KEY = "AuthToken ";
  const TOKEN_PREFIX = "Bearer ";
  const LOGIN_URL = 'http://localhost:8081/api/auth/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject : BehaviorSubject<any> ; // bch kol manist7a9 data 3al user ymchi lil back yjibhom wy7eyhom fil currentUserSubject
  private currentUser: Observable<any>;

  constructor(private http : HttpClient, private tokenStorage:TokenStorageService) { 
    // 5abina token fil storage session 
    this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem(TOKEN_KEY));
    // lcurrent kol mabch test7a9ou bch yab3th akil token lil backend bch yjib data (username, ...)
    this.currentUser = this.currentUserSubject.asObservable();

  }

  login(loginInfo: LoginInfo){
    
    return this.http.post('http://localhost:8081/api/auth/login', loginInfo, httpOptions)
    .pipe(map(data=>{
      this.saveUserData(data);
      console.log(data);
      return data;
    }));
  }

  // bch yraje3lek luser
  public getCurrentUserValue(): any{
    return this.currentUserSubject.value;
  }

  // manist7a9ouha ken fil service hetha so 7atitha private :p
  private saveUserData(data){
    this.tokenStorage.saveToken(data.accessToken);
    this.tokenStorage.saveUsername(data.username);
    this.tokenStorage.saveAuthorities(data.authorities);
    this.currentUserSubject.next(data.accessToken);
  }

}
