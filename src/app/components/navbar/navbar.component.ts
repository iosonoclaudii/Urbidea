import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <span class="brand">Urbidea</span>
      <button mat-button routerLink="/home">Home</button>
      <button mat-button routerLink="/users">Users</button>
      <button mat-button routerLink="/posts">Posts</button>
      <span style="flex:1 1 auto;"></span>
      <button mat-button (click)="logout()">Logout</button>
    </mat-toolbar>
  `,
  styles: [`
    .brand {
      font-weight: bold;
      font-size: 20px;
      margin-right: 20px;
    }
  `]
})
export class NavbarComponent {
  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
