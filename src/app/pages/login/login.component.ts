import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  template: `
    <div class="container">
      <h2>Welcome to Urbidea</h2>
      <p>To get your access token, authenticate on the <a href="https://gorest.co.in/my-account/access-tokens" target="_blank">GoRest platform</a>.</p>

      <mat-form-field appearance="outline">
        <mat-label>API Token</mat-label>
        <input matInput [(ngModel)]="token">
      </mat-form-field>

      <button mat-raised-button color="primary" (click)="login()">Log In</button>

      <p>Don't have an account?</p>
      <button mat-button routerLink="/register">Register</button>
    </div>
  `,
})
export class LoginComponent {
  token = '';
  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.token);
    this.router.navigate(['/home']);
  }
  
}
