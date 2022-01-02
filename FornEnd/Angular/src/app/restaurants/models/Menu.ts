import { FoodWithExtras } from "src/app/food/models/FoodWithExtras";

export interface Menu{

    titre: string,
    createdAt: Date, // belkchi na3mlou beha fazet news 
    restaurantName: string,
    menuFoods: FoodWithExtras[],

}