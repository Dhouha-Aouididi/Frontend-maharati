import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Service } from 'src/app/models/service';
import { ServiceService } from '../services/service-service/service.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  service: Service | undefined;
  id: number | null = null; // Initialize id as null

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.getServiceDetails();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0); // Scroll to top when navigation starts
      }
    });
  }

  getServiceDetails(): void {
    if (this.id !== null) {
      this.serviceService.getServiceById(this.id).subscribe(
        (data) => {
          this.service = data;
        },
        (error) => {
          console.log('Error fetching service details:', error);
        }
      );
    } else {
      console.log('No service id found.');
    }
  }
}
