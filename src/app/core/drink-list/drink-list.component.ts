import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FoodService } from 'src/app/createfood/food.service';
import { CartService } from 'src/app/core/shopingcart/cart.service';
import { Food } from 'src/app/interface/foodInterface';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {

  drinks$!: Observable<Food[]>
  ShoppingCart = faShoppingCart

  constructor(
    private foodService: FoodService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.drinks$ = this.foodService.getAllDrinks()
  }

  
  onAddCart(drink:Food): void {
    this.cartService.onAddToCart({
      _id : drink._id,
      name: drink.name,
      ingredients: drink.ingredients,
      imageUrl: drink.imageUrl,
      price: drink.price,
      quantity:1
    })
  }

}
