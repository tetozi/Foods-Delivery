import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  registerHandler(formValue: { email: string, password: string ,passwordConfirm: string}): void {
    console.log(formValue)
    this.authService.register(formValue).subscribe({
      next: (data) => {
        const userToken = data.data.token
        localStorage.setItem('user', userToken)
        this.router.navigate(['/'])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
