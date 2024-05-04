import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Provider } from 'src/app/models/provider';
import { ProviderService } from '../services/provider-service/provider.service';
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.css']
})
export class ProviderDetailComponent implements OnInit {
  provider: Provider | undefined;
  id: number | null = null; // Initialize id as null

  constructor(
    private route: ActivatedRoute,
    private providerService: ProviderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.getProviderDetails();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0); // Scroll to top when navigation starts
      }
    });
  }
 

  getProviderDetails(): void {
    if (this.id !== null) {
      this.providerService.getProviderById(this.id).subscribe(
        (data) => {
          this.provider = data;
        },
        (error) => {
          console.log('Error fetching provider details:', error);
        }
      );
    } else {
      console.log('No provider id found.');
    }
  }
}
