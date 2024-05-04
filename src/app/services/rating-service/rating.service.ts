import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private apiUrl = 'http://localhost:3008/ratings';

  constructor(private http: HttpClient) {}

  rateService(serviceId: string, rating: number): Observable<any> {
    const body = { serviceId, rating };
    return this.http.post<any>(`${this.apiUrl}/rate`, body)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAverageRating(serviceId: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/average?serviceId=${serviceId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error;
  }
}
