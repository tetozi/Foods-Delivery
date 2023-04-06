import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck, switchMap } from 'rxjs';
import { FoodService } from '../../createfood/food.service';
import { Food } from '../../interface/foodInterface';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

  food$!: Observable<Food>;

  constructor(
    private activateRoute: ActivatedRoute,
    private foodService: FoodService
  ) { }

  ngOnInit(): void {
    this.food$ = this.activateRoute.params.pipe(
      pluck('_id'),
      switchMap(_id => this.foodService.getOnePizza(_id))
    )
  }


}
