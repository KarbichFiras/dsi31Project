import { Menu } from "./Menu";

export interface Restaurant{
    code : String,
    name : string,
    adresse : String,
    email : String,
    description,
    image : String,
    menus: Menu[],
}