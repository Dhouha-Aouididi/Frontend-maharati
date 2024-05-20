// servicelist.component.ts

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service-service/service.service';
import { Service } from '../models/service';

@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.component.html',
  styleUrls: ['./servicelist.component.css'],
})
export class ServicelistComponent implements OnInit {
  services: Service[] = [];
  filteredServices: Service[] = [];
  searchQuery: string = '';
  p: number = 1;
  itemsPerPage: number = 3;

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.serviceService.getAllServices().subscribe(
      (response: any) => {
        this.services = Object.values(response.services);
        this.filteredServices = [...this.services];
      },
      (error) => {
        console.error('Error fetching services:', error);
      }
    );
  }

  searchServices(): void {
    this.filteredServices = this.services.filter((service) =>
      service.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  onSubmitSearch(): void {
    this.searchServices();
  }

  onPageChange(event: number): void {
    if (event >= 1 && event <= this.getTotalPages()) {
      this.p = event;
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.services.length / this.itemsPerPage);
  }
}
