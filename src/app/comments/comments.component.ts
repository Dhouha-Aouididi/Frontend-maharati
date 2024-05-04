import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comment-service/comments.service';
import { Comment } from '../models/comment';
import { TokenStorageService } from '../services/token-service/token-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];
  newComment: Comment = {
    user_id: 0, // Replace with 0 (or handle cases where user ID might be unavailable)
    service_id: 0, // Placeholder, will be replaced with service ID from URL
    commentText: '',
    rating: 0,
    id: 0 // Unnecessary for creating a new comment, can be removed
    ,
    User: {
      id: 0,
      username: ''
    }
  };
  errorMessage: string = '';

  constructor(
    private commentsService: CommentsService,
    private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute // Injected ActivatedRoute for route parameters
  ) {}

  ngOnInit() {
    const user = this.tokenStorageService.getUser();
    if (user) {
      this.newComment.user_id = user.id; // Assuming 'id' holds the user ID in stored data
    }

    // Extract service ID from URL route parameter
    this.route.params.subscribe(params => {
      this.newComment.service_id = params['id']; // Assuming the route parameter is named 'id'

      this.commentsService.getCommentsForService(this.newComment.service_id)
        .subscribe(comments => this.comments = comments, error => this.errorMessage = error.message);
    });
  }

  onCreateComment() {
    this.commentsService.createComment(this.newComment)
      .subscribe(createdComment => {
        this.comments.push(createdComment);
        this.newComment.commentText = '';
      }, error => this.errorMessage = error.message);
  }
}
