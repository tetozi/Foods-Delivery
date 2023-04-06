import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {}
 
  canActivate(): boolean {
    const isAdmin = this.authService.isAdmin()
      if (!isAdmin) {
        this.router.navigate(['/login'])
      }
      console.log(isAdmin)
    // Check if the user is logged in and has the necessary role
    if (this.authService.isLogged && this.authService.isAdmin()) {
      return true;
    }

    // Navigate to the login page if the user is not logged in or does not have the necessary role
    this.router.navigate(['/login']);
    return false;
  }

}
