import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FoodService } from './food.service';

@Component({
  selector: 'app-createfood',
  templateUrl: './createfood.component.html',
  styleUrls: ['./createfood.component.css']
})
export class CreatefoodComponent implements OnInit {
 
  


  constructor(
    private fb: FormBuilder,
    private foodService: FoodService
    ) { }

  ngOnInit(): void {

  }

  // ingredient!: FormArray;
  form = new FormGroup({
    name: new FormControl('', []),
    ingredients: new FormControl([]),
    imageUrl: new FormControl(),
    price: new FormControl()

  })
  
  


  get name() {
    return this.form.get('name');
  }
  get imageUrl() {
    return this.form.get('imageUrl');
  }

  get price() {
    return this.form.get('price');
  }
 get ingredients() {
  return this.form.get("ingredients") 
 } 

//  onAddIngridients() {
//    this.ingredient = this.form.get("ingredients") as FormArray;
//    this.ingredient.push(this.Genrow())
//  }
//
//  Genrow(): FormGroup {
//    return new FormGroup({ 
//      ingredient:new FormControl('',Validators.required),
//     
//    });
//  }
  
  createFood(): void {
   this.foodService.createPizza(this.form.value).subscribe(
    ({
      next:(data) =>{
      console.log(data)
       
      },
      error:(err) =>{
        console.log(err)
      }
     })
   )
    console.log(this.form.value)
  }
}
