import { Extra } from "./extra";
import { Food } from "./food";

export interface Product{ // c'est le produit final ==> foodwithextras
    code: string;// bch ykoun fih restaurantName and food name concatiner
    food: Food;
    extras: Extra[];
    quantiteFood: number;
    prixFinale: number; // mahouch Totale, hetha lprix ta3 lfood bil les extras mte3ou 9adech ytla3 fil le5er
    restaurantName: string; // le nom du restaurant 
}