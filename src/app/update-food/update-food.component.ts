import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, pluck, switchMap } from 'rxjs';
import { FoodService } from '../createfood/food.service';
import { Food } from '../interface/foodInterface';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent implements OnInit {
  
  food$!: Observable<Food>;
   id : string | number | undefined
  constructor(
    private foodService: FoodService,
    private activateRoute: ActivatedRoute,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.food$ = this.activateRoute.params.pipe(
      pluck('_id'),
      switchMap(_id => this.foodService.getOnePizza(_id))
  
    )
     

  }
  

  loginHandler(formValue: { id:string, name: string, ingredients: string  , imageUrl:string, price: number}): void {
    const id = formValue.id
    const name = formValue.name
    const ingredients = formValue.ingredients 
    const imageUrl = formValue.imageUrl
    const price = formValue.price
    const product = {
      name,
      ingredients,
      imageUrl,
      price
    }
    console.log(id)
    console.log(product)
    this.foodService.updateProduct(id,product).subscribe(
      ({
        next:(data) =>{
        console.log(data)
         this.route.navigate(['admin'])
        },
        error:(err) =>{
          console.log(err)
        }
       })
     )
  }

}




