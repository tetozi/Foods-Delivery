import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly ADMIN_ROLE = 'admin';
  private readonly USER_ROLE = 'user';

  get  isLogged () : boolean{
    return !!localStorage.getItem('user')
  } 

 

  constructor(private http: HttpClient) { }
  
  isAdmin(): boolean {
    // Get the user's role from local storage
    const userRole = localStorage.getItem('userRole');
    // Return true if the user's role is 'admin', false otherwise
    return userRole === this.ADMIN_ROLE;
  }

  // Method to check if the user is a regular user
  isUser(): boolean {
    // Get the user's role from local storage
    const userRole = localStorage.getItem('userRole');
    // Return true if the user's role is 'user', false otherwise
    return userRole === this.USER_ROLE;
  }
  
  login(data: any): Observable<any> {
    return this.http.post('http://localhost:5000/user/login', data)
  }


  register(data: any): Observable<any> {
    return this.http.post('http://localhost:5000/user/register', data)
  }
  logout() {
   
    localStorage.removeItem('user');
    localStorage.removeItem('userRole')
  }

}


/*
import { tap, catchError } from 'rxjs/operators';

interface User {
  username: string;
  password: string;
  role: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: any;

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<any> {
    return this.http.post<any>('/api/login', { username, password }).pipe(
      tap(user => {
        this.currentUser = user;
      }),
      catchError(() => {
        this.currentUser = null;
        return of(null);
      })
    );
  }

  public logout(): void {
    this.currentUser = null;
  }

  public isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  public isAdmin(): boolean {
    return this.currentUser && this.currentUser.role === 'admin';
  }
}
 */