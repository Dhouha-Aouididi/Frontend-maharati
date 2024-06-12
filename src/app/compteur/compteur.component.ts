import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent {
  
  constructor(private router: Router) { }

redirectToServiceDetails(serviceId: number) {
  this.router.navigate(['/service', serviceId]);
}
ngOnInit(): void {
  // Set the date we're counting down to
  const countDownDate: number = new Date("2024-06-21T00:00:00Z").getTime();

  // Update the countdown every second
  const x = setInterval(() => {
      // Get the current date and time
      const now: number = new Date().getTime();
      
      // Calculate the distance between now and the countdown date
      const distance: number = countDownDate - now;
      
      // Calculate days, hours, minutes, and seconds
      const days: number = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours: number = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes: number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds: number = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown by first checking if the element exists
      const daysElement = document.getElementById("days");
      const hoursElement = document.getElementById("hours");
      const minutesElement = document.getElementById("minutes");
      const secondsElement = document.getElementById("seconds");

      if (daysElement && hoursElement && minutesElement && secondsElement) {
          daysElement.innerHTML = days.toString();
          hoursElement.innerHTML = hours.toString();
          minutesElement.innerHTML = minutes.toString();
          secondsElement.innerHTML = seconds.toString();
      }
      
      // If the countdown is over, display a message
      if (distance < 0) {
          clearInterval(x); // Stop the countdown
          console.log("EXPIRED");
      }
  }, 1000);
}
}
