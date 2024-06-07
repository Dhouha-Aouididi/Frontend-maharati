import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/services/subscribe/subscribe.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  email!: string;

  constructor(private subscribeService: SubscribeService, private toastr: ToastrService) { }

  onSubmit() {
    this.subscribeService.subscribe(this.email).subscribe(
      () => {
        this.toastr.success('Abonnement réussi !', 'Succès');
        // Gérer la réussite de l'abonnement ici
      },
      error => {
        this.toastr.error('Erreur lors de l\'abonnement.', 'Erreur');
        // Gérer les erreurs ici
      }
    );
  }
}
