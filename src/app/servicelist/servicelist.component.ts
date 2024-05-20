import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service-service/service.service';
import { Service } from '../models/service';

@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.component.html',
  styleUrls: ['./servicelist.component.css']
})
export class ServicelistComponent implements OnInit {
  services: Service[] = [];
  p: number = 1;
  itemsPerPage: number = 3;
  paginationId: string = 'servicePagination'; // Unique ID for pagination instance

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.serviceService.getAllServices().subscribe(
      (response: any) => {
        console.log('Services retrieved:', response.services);
        this.services = Object.values(response.services); // Convert object to array
      },
      (error) => {
        console.log('Error fetching services:', error);
      }
    );
  }

  onPageChange(event: number): void {
    if (event >= 1 && event <= this.getTotalPages()) {
      this.p = event;
    }
    // You can also call loadServices() here if needed for new page data
  }

  getTotalPages(): number {
    return Math.ceil(this.services.length / this.itemsPerPage);
  }
}


