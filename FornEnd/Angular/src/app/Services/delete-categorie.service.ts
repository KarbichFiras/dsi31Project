import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteCategorieService {
  constructor(private http :HttpClient) { }

  deleteCategorie(id) : Observable<object>{
    return this.http.delete('https://jsonplaceholder.typicode.com/todos/'+id);
  }
}
