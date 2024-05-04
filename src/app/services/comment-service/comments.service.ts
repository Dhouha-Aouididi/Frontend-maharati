import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment';
import { TokenStorageService } from '../token-service/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private baseUrl = 'http://localhost:3000/comments';

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {}

  createComment(comment: Comment): Observable<Comment> {
    const user = this.tokenStorageService.getUser();
    if (user) {
      comment.user_id = user.id;
    }
    return this.http.post<Comment>(this.baseUrl, comment);
  }

  getCommentsForService(serviceId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/service/${serviceId}`);
  }
}
