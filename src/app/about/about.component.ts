import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{



  constructor(
    private router: Router
  ) {}


  ngOnInit(): void {   
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0); // Scroll to top when navigation starts
      }

});
  }
}
