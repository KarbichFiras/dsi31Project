import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodsSahredService {

  fooods;

  private foodSource = new BehaviorSubject(this.getFoods);
  currentFoods = this.foodSource.asObservable();
  
    constructor() { }

  getFoods(){
    return this.fooods;
  }

  setFoods(fooods){
    this.foodSource.next(fooods);
  }
}
