import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Cart } from '../../interface/cart';

import { Food } from '../../interface/foodInterface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = [];
  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor() { }



  onAddToCart(item: CartItem): void {
    const items = [...this.cart.value.items]
    //chek itme exist in  cart
    const itemsInCart = items.find((_item) => _item._id === item._id)
    // add quantity
    if (itemsInCart) {
      itemsInCart.quantity += 1
    } else {
      items.push(item)
    }
    this.cart.next({ items })
    console.log(this.cart.value)
  }

  removeQuantity(item: CartItem): void {
    let removedItem: CartItem | undefined

    let filteredItem = this.cart.value.items.map((_item) => {
      if (_item._id === item._id) {
        _item.quantity--;

        if (_item.quantity === 0) {
          removedItem = _item
        }
      }
      return _item
    })

    if (removedItem) {
      this.removeFromCart(removedItem)
    }

  }

  //make total price
  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0)

  }

  //remove all item 
  clearCart(): void {
    this.cart.next({ items: [] })

  }

  //remove single item
  removeFromCart(item: CartItem): void {
    const findItmens = this.cart.value.items.filter(
      (_item) => _item._id !== item._id
    )

    this.cart.next({ items: findItmens })
  }

}
