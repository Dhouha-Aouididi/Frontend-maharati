import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Service } from 'src/app/models/service';
import { ServiceService } from '../services/service-service/service.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { BookingModalComponent } from '../booking-modal/booking-modal.component';
import { BookingService } from '../services/booking-service/booking.service';
import { TokenStorageService } from '../services/token-service/token-storage.service';
import { Booking } from 'src/app/models/booking';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  service: Service | undefined;
  id: number | null = null;
  selectedDate: Date | null = null;
  selectedTime: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService,
    private router: Router,
    private modalService: NgbModal,
    private bookingService: BookingService,
    private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.getServiceDetails();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0);
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

  openBookingModal() {
    const modalOptions: NgbModalOptions = {
      backdrop: false,
      keyboard: true
    };
    const modalRef = this.modalService.open(BookingModalComponent, modalOptions);
    modalRef.componentInstance.service = this.service;

    modalRef.componentInstance.dateTimeSelected.subscribe((selectedData: { date: Date, time: string }) => {
      this.selectedDate = selectedData.date;
      this.selectedTime = selectedData.time;
      console.log('Selected Date and Time:', this.selectedDate, this.selectedTime);
      this.createBooking();
    });
  }

  createBooking() {
    if (this.service && this.selectedDate && this.selectedTime) {
      const user = this.tokenStorageService.getUser();
      if (user) {
        const newBooking: Booking = {
          user_id: user.id,
          service_id: this.service.id,
          date: this.selectedDate,
          time: this.selectedTime,
          // status: 'pending',
          Service: this.service
        };

        this.bookingService.createBooking(newBooking).subscribe(
          (data) => {
            console.log('Booking created successfully:', data);
          },
          (error) => {
            console.log('Error creating booking:', error);
          }
        );
      } else {
        console.log('User is undefined. Cannot create booking.');
      }
    } else {
      console.log('Service, selected date or time is undefined. Cannot create booking.');
    }
  }
}
