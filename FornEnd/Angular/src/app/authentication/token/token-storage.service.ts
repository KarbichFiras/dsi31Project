import { Injectable } from '@angular/core';

  const TOKEN_KEY = "AuthToken";
  const USERNAME_KEY ="AuthUsername";
  const AUTHORITIES_KEY = "AuthAuthorities";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private roles: Array<string> =[];

  constructor() { }

  public saveToken(token: string){
    // delete if exists
    this.removeToken();
    // save the token
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(){
    if(sessionStorage.getItem(TOKEN_KEY) == null){
      return "";
    }
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string){
    // delete if exists
    this.removeUsername();
    // save the username
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(){
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: string[]){
    // delete if exists
    this.removeAuthorities();
    // save the authorities
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities) );
  }

  public getAuthorities(){
    this.roles = [];
    if(sessionStorage.getItem(AUTHORITIES_KEY)){
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY) || '{}' ).forEach(authority=>{
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  removeToken(){
    window.sessionStorage.removeItem(TOKEN_KEY);
  }

  removeUsername(){
    window.sessionStorage.removeItem(USERNAME_KEY);
  }

  removeAuthorities(){
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
  }
}
