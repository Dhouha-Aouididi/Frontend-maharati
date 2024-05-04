import { Component, OnInit, Input } from '@angular/core';
import { Service } from './models/service';
import { FilteredDataService } from './services/filteredservices/filtered-data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filteredServices$: Observable<Service[]>;

  constructor(private filteredDataService: FilteredDataService) {
    this.filteredServices$ = this.filteredDataService.getAllServices();
  }

  searchServices(event: Event): void {
    if (event && event.target) {
      const inputElement = event.target as HTMLInputElement;
      const searchText = inputElement.value;
      const services: Service[] = []; // You need to fetch services from somewhere

      // Call filterServices with services array and searchText
      this.filteredServices$ = this.filteredDataService.filterServices(services, searchText);
    }
  }
}
