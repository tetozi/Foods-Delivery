import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { FoodListComponent } from './food-list/food-list.component';
import { ShopingcartComponent } from './shopingcart/shopingcart.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodContainerComponent } from './food-container/food-container.component';




@NgModule({
  declarations: [
    DrinkListComponent,
    FoodListComponent,
    ShopingcartComponent,
    FoodDetailComponent,
    FoodContainerComponent,
  ],
  imports: [
    CommonModule,
   RouterModule,
   FontAwesomeModule,

  ],
  exports: [
    
  ]
})
export class CoreModule { }
