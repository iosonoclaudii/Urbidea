import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private router: Router) {}

  login(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  register(email: string, password: string, token: string) {
    // Simula una registrazione salvando il token
    localStorage.setItem('token', token);
    // Logica reale va qui
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
