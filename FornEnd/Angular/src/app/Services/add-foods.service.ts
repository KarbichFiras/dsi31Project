import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddFoodsService {

  constructor(private http:HttpClient) { }
  getAllFoods(){
    const headers = new HttpHeaders().set('x-rapidapi-host','burgers1.p.rapidapi.com').append('x-rapidapi-key','e95d54291bmshbdf550111cf7290p11769bjsn57aac50bb3e9');
//call api 
return this.http.get("https://burgers1.p.rapidapi.com/burgers",{headers, responseType: 'text' as 'json'});
//stocker les 

     
      
  }
}
