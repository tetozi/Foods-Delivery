import { Food } from "./foodInterface";

export interface Cart {
   items: Array<CartItem>
}


export interface CartItem {  
    _id: string
    name: string;
    ingredients: string;
    imageUrl: string;
    price: number
    quantity:number
}


