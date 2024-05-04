import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Service } from 'src/app/models/service';
import { ServiceService } from '../service-service/service.service';
@Injectable({
  providedIn: 'root'
})
export class FilteredDataService {
  constructor(private serviceService: ServiceService) {}

  // Fetch all services from the backend
  getAllServices(): Observable<Service[]> {
    return this.serviceService.getAllServices();
  }

  // Filter services based on search criteria
//   filterServices(searchText: string): Observable<Service[]> {
//     return this.serviceService.getAllServices().pipe(
//       map(services => services.filter(service =>
//         service.title.toLowerCase().includes(searchText.toLowerCase()) ||
//         service.category.toLowerCase().includes(searchText.toLowerCase())
//       ))
//     );
//   }
// }
filterServices(services: Service[], filterValue: string): Observable<Service[]> {
  // Implement your filtering logic here
  const filteredServices = services.filter(service => {
    // Example filtering logic (you can adjust this according to your requirements)
    return service.title.toLowerCase().includes(filterValue.toLowerCase()) ||
           service.category.toLowerCase().includes(filterValue.toLowerCase());
  });

  return of(filteredServices); // Return the filtered services as an Observable
}
}
