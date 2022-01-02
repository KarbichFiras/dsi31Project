import { Extra } from "./extra";
import { Food } from "./food";

export interface FoodWithExtras{ 
    code: string;
    extras: Extra[];
    food: Food;
    
}