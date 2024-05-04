import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider } from 'src/app/models/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private apiUrl = 'http://localhost:3000/providers'; 

  constructor(private http: HttpClient) { }

  getAllProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.apiUrl);
  }

  getProviderById(id: number): Observable<Provider> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Provider>(url);
  }

  // createProvider(providerData: Provider): Observable<Provider> {
  //   return this.http.post<Provider>(this.apiUrl, providerData);
  // }

  // updateProvider(providerId: number, providerData: Provider): Observable<Provider> {
  //   const url = `${this.apiUrl}/${providerId}`;
  //   return this.http.put<Provider>(url, providerData);
  // }

  // deleteProvider(providerId: number): Observable<void> {
  //   const url = `${this.apiUrl}/${providerId}`;
  //   return this.http.delete<void>(url);
  // }
}
