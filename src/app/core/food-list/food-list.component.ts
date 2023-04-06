import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../../createfood/food.service';
import { Food } from '../../interface/foodInterface';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../shopingcart/cart.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  @Output()
  detailsClicked = new EventEmitter<string | number>();

 

  ShoppingCart = faShoppingCart


  foods$!: Observable<Food[]>

  constructor(
    private foodService: FoodService,
    private cartService: CartService

  ) { }

  ngOnInit(): void {
    this.foods$ = this.foodService.getPizza();
  }
  onClick(food: Food) {
    this.detailsClicked.emit(food._id);
  }

  onAddCart(food:Food): void {
    this.cartService.onAddToCart({
      _id : food._id,
      name: food.name,
      ingredients: food.ingredients,
      imageUrl: food.imageUrl,
      price: food.price,
      quantity:1
    })
  }
}
