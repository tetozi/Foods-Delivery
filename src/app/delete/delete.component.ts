import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, pluck, switchMap } from 'rxjs';
import { FoodService } from '../createfood/food.service';
import { Food } from '../interface/foodInterface';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  food$!: Observable<Food>;
  constructor(
    private activateRoute: ActivatedRoute,
    private foodService: FoodService,
  ) { }

  ngOnInit(): void {
    this.food$ = this.activateRoute.params.pipe(
      pluck('_id'),
      switchMap(_id => this.foodService.deleteProduct(_id))

    )
  }


}
