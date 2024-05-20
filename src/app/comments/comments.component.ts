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
    service_id: 0,
    commentText: '',
    rating: 0,
    id: 0,
    User: {
      id: 0,
      username: ''
    }
  };
  errorMessage: string = '';
  currentUserId: number | undefined; // Ajout de la variable pour stocker l'ID de l'utilisateur connecté

  constructor(
    private commentsService: CommentsService,
    private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const user = this.tokenStorageService.getUser();
    if (user) {
      this.newComment.user_id = user.id;
      this.currentUserId = user.id; // Sauvegarde de l'ID de l'utilisateur connecté
    }

    this.route.params.subscribe(params => {
      this.newComment.service_id = params['id'];

      this.commentsService.getCommentsForService(this.newComment.service_id)
        .subscribe(comments => this.comments = comments, error => this.errorMessage = error.message);
    });
  }

  onCreateComment() {
    this.commentsService.createComment(this.newComment)
      .subscribe(createdComment => {
        this.comments.push(createdComment);
        this.newComment.commentText = '';
        this.newComment.rating = 0;
      }, error => this.errorMessage = error.message);
  }

  onRateClick(rating: number) {
    this.newComment.rating = rating;
  }

  onDeleteComment(commentId: number) {
    const commentToDelete = this.comments.find(comment => comment.id === commentId);

    if (commentToDelete && commentToDelete.user_id === this.currentUserId) {
      this.commentsService.deleteComment(commentId)
        .subscribe(() => {
          this.comments = this.comments.filter(comment => comment.id !== commentId);
        }, error => this.errorMessage = error.message);
    } else {
      this.errorMessage = "You are not authorized to delete this comment.";
    }
  }
}
