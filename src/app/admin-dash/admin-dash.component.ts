import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, pluck, switchMap  } from 'rxjs';
import { FoodService } from '../createfood/food.service';
import { Food } from '../interface/foodInterface';
import { ActivatedRoute } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {  
  @Output()
  detailsClicked = new EventEmitter<string | number>();

  trash = faTrash
  foods$!: Observable<Food[]>
 

  constructor(
    private foodService:FoodService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.foods$ = this.foodService.getPizza()
  }


  
  onClick(food: Food) {
    this.detailsClicked.emit(food._id);
  }

}
