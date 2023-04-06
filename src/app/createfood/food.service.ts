import { Injectable } from '@angular/core';
import {  Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Food} from '../interface/foodInterface'


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }


  createPizza(data: any): Observable<any> {
    return this.http.post('http://localhost:5000/food/create', data)
  }

  getPizza (): Observable<Food[]> {
    return this.http.get<Food[]>('http://localhost:5000/food')
  }

  getAllDrinks () : Observable<Food[]> {
    return this.http.get<Food[]>('http://localhost:5000/drink')
  }

  getOnePizza (_id: string | number) : Observable<Food> {
    return this.http.get<Food>(`http://localhost:5000/food/${_id}`);
 
}  

 updateProduct( _id:string  ,data:any) : Observable<any> {
  return this.http.patch(`http://localhost:5000/food/${_id}`, data)
 }

 deleteProduct(_id: string | number) : Observable<Food> {
  return this.http.delete<Food>(`http://localhost:5000/food/${_id}`);
 }

}