import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Service } from 'src/app/models/service';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = `${environment.APIUrl}/services`; 

  constructor(private http: HttpClient) { }

  private currentServiceIdSource = new BehaviorSubject<number>(0);
  currentServiceId$ = this.currentServiceIdSource.asObservable();

  setCurrentServiceId(serviceId: number) {
    this.currentServiceIdSource.next(serviceId);
  }

  getAllServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.apiUrl);
  }

  getServiceById(id: number): Observable<Service> {
    const url = `${this.apiUrl}/${id}`; 
    return this.http.get<Service>(url);
  }

  // getServiceById(id: number): Observable<Service> {
  //   const url = `${this.apiUrl}/${(id ?? 0)}`; // Use 0 or another default value
  //   return this.http.get<Service>(url);
  // }

}