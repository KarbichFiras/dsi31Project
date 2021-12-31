import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProduct(libelle:string){
    // get foodByLibelle from backend
    let p=new HttpParams().set('libelle',libelle);
    return this.http.get('http://localhost:8081/api/restaurants/getProduct',{params:p});
  }

}
