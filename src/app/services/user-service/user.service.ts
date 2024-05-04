import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users'; 
constructor(private http: HttpClient) {}


getPublicContent(): Observable<any> {
  return this.http.get(this.apiUrl + 'all', { responseType: 'text' });
}

getUserBoard(): Observable<any> {
  return this.http.get(this.apiUrl + 'user', { responseType: 'text' });
}

getModeratorBoard(): Observable<any> {
  return this.http.get(this.apiUrl + 'mod', { responseType: 'text' });
}

getAdminBoard(): Observable<any> {
  return this.http.get(this.apiUrl + 'admin', { responseType: 'text' });
}

updateUserProfile(userId: number, updatedUserData: any) {
  return this.http.put<any>(`${this.apiUrl}/${userId}`, updatedUserData);
}

getUserById(userId: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/${userId}`);
}

updateUser(userId: number, userData: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/${userId}`, userData);
}

getUsername(userId: number): Observable<string> {
  return this.http.get<string>(`${this.apiUrl}/${userId}/username`);
}

getUsers(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}`);
}
}
