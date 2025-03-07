import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <div style="padding:20px; max-width:800px; margin:auto;">
      <h2>{{user?.name}}</h2>
      <p>Email: {{user?.email}}</p>

      <h3>Post</h3>
      <mat-card *ngFor="let post of posts" style="margin-bottom:10px;">
        <mat-card-title>{{post.title}}</mat-card-title>
        <mat-card-content>{{post.body}}</mat-card-content>
        <button mat-button (click)="loadComments(post.id)">Show Comments</button>

        <div *ngIf="post.comments">
          <p *ngFor="let comment of post.comments"><strong>{{comment.name}}:</strong> {{comment.body}}</p>
        </div>
      </mat-card>
    </div>
  `,
})
export class UserDetailComponent implements OnInit {
  user: any;
  posts: any[] = [];

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.api.getUser(+userId!).subscribe(data => this.user = data);
    this.api.getPosts().subscribe((posts: any) => {
      this.posts = posts.filter((p: any) => p.user_id === +userId!);
    });
  }

  loadComments(postId: number) {
    this.api.getComments(postId).subscribe((comments: any) => {
      const post = this.posts.find(p => p.id === postId);
      post.comments = comments;
    });
  }
}
