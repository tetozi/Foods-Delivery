import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  loginHandler(formValue: { email: string, password: string }): void {
    this.authService.login(formValue).subscribe({
      next: (data) => {
        console.log(data)
        const userToken = data.data.token
        const userRole  = data.data.user.role

        localStorage.setItem('user', userToken)
        localStorage.setItem('userRole', userRole)
        this.router.navigate(['/'])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
