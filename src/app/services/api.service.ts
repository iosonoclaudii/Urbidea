import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'https://gorest.co.in/public/v2';

  constructor(private http: HttpClient) {}

  private headers() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  // Utenti
  getUsers() {
    return this.http.get(`${this.apiUrl}/users`, { headers: this.headers() });
  }

  getUser(id: number) {
    return this.http.get(`${this.apiUrl}/users/${id}`, { headers: this.headers() });
  }

  createUser(data: any) {
    return this.http.post(`${this.apiUrl}/users`, data, { headers: this.headers() });
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/users/${id}`, { headers: this.headers() });
  }

  // Post
  getPosts() {
    return this.http.get(`${this.apiUrl}/posts`, { headers: this.headers() });
  }

  createPost(data: any) {
    return this.http.post(`${this.apiUrl}/posts`, data, { headers: this.headers() });
  }

  getComments(postId: number) {
    return this.http.get(`${this.apiUrl}/posts/${postId}/comments`, { headers: this.headers() });
  }

  createComment(postId: number, data: any) {
    return this.http.post(`${this.apiUrl}/posts/${postId}/comments`, data, { headers: this.headers() });
  }
}
