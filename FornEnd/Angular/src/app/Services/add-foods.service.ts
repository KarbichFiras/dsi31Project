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

  getAllFoods(){

//call api 
return this.http.get("https://jsonplaceholder.typicode.com/posts/1");}


addFood(body){ return this.http.post('https://jsonplaceholder.typicode.com/posts/',body);}

updateFood(body,id){ return this.http.put('https://jsonplaceholder.typicode.com/posts/'+id,body);}

deleteFood(id){return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+id);
}

}