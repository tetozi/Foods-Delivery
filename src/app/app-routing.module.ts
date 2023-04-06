import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreatefoodComponent } from './createfood/createfood.component';
import { DeleteComponent } from './delete/delete.component';
import { DrinkListComponent } from './core/drink-list/drink-list.component';
import { FoodDetailComponent } from './core/food-detail/food-detail.component';
import { FoodListComponent } from './core/food-list/food-list.component';
import { HomeComponent } from './home/home.component';
import { RoleGuardGuard } from './role-guard.guard';
import { ShopingcartComponent } from './core/shopingcart/shopingcart.component';
import { UpdateFoodComponent } from './update-food/update-food.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'createFood', component: CreatefoodComponent },
  { path: 'food-list/food/:_id', component: FoodDetailComponent },
  { path: "shopingcart", component: ShopingcartComponent },
  { path: "admin", component: AdminDashComponent,canActivate:[RoleGuardGuard] },
  { path: "admin/update/:_id", component: UpdateFoodComponent },
  { path: "admin/delete/:_id", component: DeleteComponent },
  {path: "food-list", component:FoodListComponent},
  {path:"drinks-list",component:DrinkListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
