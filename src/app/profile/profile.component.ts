import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service/user.service';
import { TokenStorageService } from '../services/token-service/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {};

  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    const userId = this.tokenStorageService.getUser().id;
    this.userService.getUserById(userId).subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  onSubmit(): void {
    const userId = this.tokenStorageService.getUser().id;
    this.userService.updateUserProfile(userId, this.user).subscribe(
      response => {
        alert('Profile updated successfully!');
      },
      error => {
        alert('An error occurred while updating the profile.');
        console.error('Error updating user profile:', error);
      }
    );
  }
  deleteUser(): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce compte ?')) {
      this.userService.deleteUser(this.user.id).subscribe(() => {
        alert('Compte supprimé avec succès');
        // Rediriger l'utilisateur après la suppression
      }, error => {
        console.error('Error deleting user:', error);
        alert('Erreur lors de la suppression du compte');
      });
    }
}
}
