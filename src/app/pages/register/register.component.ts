import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  template: `
    <div class="container">
      <h2>Create Your Account</h2>
      <mat-form-field appearance="outline">
        <mat-label>Email</mat-label>
        <input matInput type="email" [(ngModel)]="email">
      </mat-form-field>
      
      <mat-form-field appearance="outline">
        <mat-label>Password</mat-label>
        <input matInput type="password" [(ngModel)]="password">
      </mat-form-field>

      <mat-form-field appearance="outline">
        <mat-label>API Token</mat-label>
        <input matInput [(ngModel)]="token">
      </mat-form-field>

      <button mat-raised-button color="primary" (click)="register()">Register</button>
      <button mat-button routerLink="/login">Back to Login</button>
    </div>
  `,
})
export class RegisterComponent {
  email = '';
  password = '';
  token = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.email, this.password, this.token);
    this.router.navigate(['/login']);
  }
}
