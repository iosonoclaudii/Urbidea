import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule, FormsModule, CommonModule],
  template: `
    <div style="padding:20px; max-width:800px; margin:auto;">

      <mat-form-field style="width:100%; margin-bottom:20px;">
        <mat-label>Search Post</mat-label>
        <input matInput [(ngModel)]="searchTerm" placeholder="Insert Title or Text">
      </mat-form-field>

      <button mat-raised-button color="primary" (click)="createPost()">New Post</button>

      <mat-card *ngFor="let post of filteredPosts()" style="margin-top:10px;">
        <mat-card-title>{{post.title}}</mat-card-title>
        <mat-card-content>{{post.body}}</mat-card-content>
        <button mat-button (click)="loadComments(post.id)">Comments</button>
        <button mat-button color="accent" (click)="addComment(post.id)">Add Comment</button>

        <div *ngIf="post.comments">
          <p *ngFor="let comment of post.comments">
            <strong>{{comment.name}}:</strong> {{comment.body}}
          </p>
        </div>
      </mat-card>

    </div>
  `,
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  searchTerm = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.api.getPosts().subscribe((data: any) => this.posts = data);
  }

  filteredPosts() {
    return this.posts.filter(post =>
      post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  createPost() {
    const title = prompt('Title post');
    const body = prompt('Content of the post');
    const user_id = prompt('User ID associated with the post (numeric)');

    if (title && body && user_id) {
      const data = { title, body, user_id: +user_id };
      this.api.createPost(data).subscribe(() => this.loadPosts());
    }
  }

  loadComments(postId: number) {
    this.api.getComments(postId).subscribe((comments: any) => {
      const post = this.posts.find(p => p.id === postId);
      post.comments = comments;
    });
  }

  addComment(postId: number) {
    const name = prompt('Tuo Nome');
    const body = prompt('Commento');
    const email = prompt('Tua Email');

    if (name && body && email) {
      const data = { name, body, email, post_id: postId };
      this.api.createComment(postId, data).subscribe(() => this.loadComments(postId));
    }
  }
}
