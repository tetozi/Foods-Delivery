import { HttpClient } from '@angular/common/http';
import { Component,  OnInit,  } from '@angular/core';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { loadStripe } from '@stripe/stripe-js';
import { Cart, CartItem } from '../../interface/cart';

import { CartService } from './cart.service';

@Component({
  selector: 'app-shopingcart',
  templateUrl: './shopingcart.component.html',
  styleUrls: ['./shopingcart.component.css']
})
export class ShopingcartComponent implements OnInit {
   trash = faTrash
  cart: Cart = {items : []}
   
  dataSource: Array<CartItem> = []
 
  constructor(
    private cartService : CartService,
    private http : HttpClient
  ) { }

  ngOnInit(): void {
   this.cartService.cart.subscribe((_cart: Cart )=> {
    this.cart = _cart
    this.dataSource = this.cart.items

   })
  }  


  getTotal(items: Array<CartItem>) : number {
    return this.cartService.getTotal(items)
  }  

  onClearCart() : void {
    this.cartService.clearCart()
  }

  onRemoveFromCart(item: CartItem) : void {
    this.cartService.removeFromCart(item)
  }

  onAddQuantity(item : CartItem) : void{
   this.cartService.onAddToCart(item)
  }

  onRemoveQuantity(item : CartItem) : void {
    this.cartService.removeQuantity(item)
  }

  onCheckOut() :void {
    this.http.post(`http://localhost:5000/shopingcart`,{
      item: this.cart.items
    }).subscribe(
      async(res:any) => {
        let stripe = await loadStripe('pk_test_51MJi87JVapMBQzMXx3XUo0PHEhqgiHOY3Hof5LZvh6MzGBMWHSmISmUD6P6EINe6UhAijegFvXHezqWH3nWFBdJw002vK2qcKE')
        stripe?.redirectToCheckout({
          sessionId: res.id
        })
      }
    )
  }

}
