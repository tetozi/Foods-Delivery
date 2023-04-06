import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { CreatefoodComponent } from './createfood/createfood.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { UpdateFoodComponent } from './update-food/update-food.component';
import { DeleteComponent } from './delete/delete.component';
import { CoreModule } from './core/core.module';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CreatefoodComponent,
    AdminDashComponent,
    UpdateFoodComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
