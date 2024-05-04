import { Component, OnInit} from '@angular/core';
import { ProviderService } from '../services/provider-service/provider.service';
import { Provider } from '../models/provider';

@Component({
  selector: 'app-providerlist',
  templateUrl: './providerlist.component.html',
  styleUrls: ['./providerlist.component.css'],
 
})
export class ProviderlistComponent implements OnInit {
  providers: Provider[] = [];

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.fetchProviders();
  }

  fetchProviders() {
    this.providerService.getAllProviders().subscribe(
      (response: any) => {
        this.providers = response.providers;
      },
      (error) => {
        console.log('Error fetching providers:', error);
      }
    );
  }
}
