// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Comment } from 'src/app/models/comment';
// import { TokenStorageService } from '../token-service/token-storage.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class CommentsService {
//   private baseUrl = 'http://localhost:3000/comments';

//   constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {}

//   createComment(comment: Comment): Observable<Comment> {
//     const user = this.tokenStorageService.getUser();
//     if (user) {
//       comment.user_id = user.id;
//     }
//     return this.http.post<Comment>(this.baseUrl, comment);
//   }

//   getCommentsForService(serviceId: number): Observable<Comment[]> {
//     return this.http.get<Comment[]>(`${this.baseUrl}/service/${serviceId}`);
//   }


//    // Fonction pour supprimer un commentaire par ID
//    deleteComment(commentId: number): Observable<any> {
//     return this.http.delete(`${this.baseUrl}/${commentId}`);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { Comment } from 'src/app/models/comment';
import { TokenStorageService } from '../token-service/token-storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private baseUrl = `${environment.APIUrl}/comments`;
  private httpTimeout = 5000; // 5 seconds timeout

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {}

  createComment(comment: Comment): Observable<Comment> {
    const user = this.tokenStorageService.getUser();
    if (user) {
      comment.user_id = user.id;
    }
    return this.http.post<Comment>(this.baseUrl, comment).pipe(
      timeout(this.httpTimeout),
      catchError(error => {
        // Handle the error appropriately
        console.error('Create comment request failed:', error);
        throw error;
      })
    );
  }

  getCommentsForService(serviceId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/service/${serviceId}`).pipe(
      timeout(this.httpTimeout),
      catchError(error => {
        // Handle the error appropriately
        console.error('Get comments request failed:', error);
        throw error;
      })
    );
  }

  deleteComment(commentId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${commentId}`).pipe(
      catchError(error => {
        console.error('Delete comment request failed:', error);
        return throwError(error);
      })
    );
  }
  
}
