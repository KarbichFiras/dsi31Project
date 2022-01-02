import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  foodsWithExtrasList;

  private foodsWithExtrasListSource = new BehaviorSubject(this.getFoodsWithExtrasList);
  currentoodsWithExtrasList = this.foodsWithExtrasListSource.asObservable();
  
  constructor() { }

  getFoodsWithExtrasList(){
    return this.foodsWithExtrasList;
  }

  setFoodsWithExtrasList(foodsWithExtrasList){
    this.foodsWithExtrasListSource.next(foodsWithExtrasList);
  }
}
