import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
interface Food{
  name:string
  restaurant:string
  description:string
  ingredients:string  
  line1:string
  line2:string
  postcode:string
  country:string
}
@Injectable({
  providedIn: 'root'
})
export class AddFoodsService {

  constructor(private http:HttpClient) { }
  getAllFoods():Observable<Food>{
    const headers = new HttpHeaders().set('x-rapidapi-host','burgers1.p.rapidapi.com').append('x-rapidapi-key','e95d54291bmshbdf550111cf7290p11769bjsn57aac50bb3e9');
//call api 
return this.http.get<Food>("https://burgers1.p.rapidapi.com/burgers",{headers, responseType: 'text' as 'json'});
//stocker les 

     
      
  }
}
