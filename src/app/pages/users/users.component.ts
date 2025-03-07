import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule, FormsModule, CommonModule],
  template: `
    <div style="padding:20px; max-width: 800px; margin: auto;">
      <mat-form-field style="width:100%; margin-bottom:20px;">
        <mat-label>Search Name or Email</mat-label>
        <input matInput [(ngModel)]="searchTerm" placeholder="Inserisci nome o email">
      </mat-form-field>

      <button mat-raised-button color="primary" (click)="createUser()">Add User</button>

      <mat-card *ngFor="let user of filteredUsers()" style="margin: 10px 0;">
        <mat-card-title>{{user.name}}</mat-card-title>
        <mat-card-content>{{user.email}}</mat-card-content>
        <button mat-button color="warn" (click)="deleteUser(user.id)">Delete</button>
      </mat-card>
    </div>
  `,
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  searchTerm = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.api.getUsers().subscribe((data: any) => this.users = data);
  }

  filteredUsers() {
    return this.users.filter(user => 
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  createUser() {
    const nome = prompt('Insert new username');
    const email = prompt('Insert email');
    if (nome && email) {
      const data = { name: nome, email, gender: 'male', status: 'active' };
      this.api.createUser(data).subscribe(() => this.loadUsers());
    }
  }

  deleteUser(id: number) {
    this.api.deleteUser(id).subscribe(() => this.loadUsers());
  }
}
