import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ShoppingCart = faShoppingCart
  isAdmin = false;
  isUser = false;
  
  get isLogged() { return this.authService.isLogged; }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.isUser = this.authService.isUser();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
