import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-service/token-storage.service';
import { BookingService } from '../services/booking-service/booking.service';
import { Booking } from '../models/booking';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { BookingModalUpdateComponent } from '../booking-modal-update/booking-modal-update.component';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
  providers: [DatePipe],
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] = [];
  selectedBooking: Booking | undefined;
  service: any;
  selectedDate: Date | undefined;

  constructor(
    private bookingService: BookingService,
    private tokenStorageService: TokenStorageService,
    private modalService: NgbModal,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();
    if (user) {
      this.bookingService.getBookingsByUserId(user.id).subscribe(
        (bookings) => {
          this.bookings = bookings;
        },
        (error) => {
          console.error('Error fetching bookings:', error);
        }
      );
    }
  }

  deleteBooking(bookingId: number): void {
    this.bookingService.deleteBooking(bookingId).subscribe(
      () => {
        this.bookings = this.bookings.filter(booking => booking.id !== bookingId);
      },
      (error) => {
        console.error('Error deleting booking:', error);
      }
    );
  }

  formatDateTime(date: string | Date, format: string): string {
    return this.datePipe.transform(date, format)!;
  }

  // openCreateBookingModal(): void {
  //   const modalOptions: NgbModalOptions = {
  //     backdrop: false,
  //     keyboard: true
  //   };
  //   const modalRef = this.modalService.open(BookingModalComponent, modalOptions);
  //   modalRef.componentInstance.booking = undefined;

  //   modalRef.componentInstance.dateTimeSelected.subscribe((selectedData: { date: Date, time: string }) => {
  //     const user = this.tokenStorageService.getUser();
  //     if (user) {
  //       const newBooking: Booking = {
  //         user_id: user.id,
  //         service_id: this.service.id,
  //         date: selectedData.date,
  //         time: selectedData.time,
  //         Service: this.service
  //       };
  //       this.createBooking(newBooking);
  //     }
  //   });
  // }

  openUpdateBookingModal(booking: Booking): void {
    const modalOptions: NgbModalOptions = {
      backdrop: false,
      keyboard: true
    };
    const modalRef = this.modalService.open(BookingModalUpdateComponent, modalOptions);
    modalRef.componentInstance.booking = booking;

    modalRef.componentInstance.dateTimeSelected.subscribe((selectedData: { date: Date, time: string }) => {
      this.selectedBooking = { ...booking, date: selectedData.date, time: selectedData.time };
      this.updateBooking(this.selectedBooking);
    });
  }

  // createBooking(booking: Booking): void {
  //   this.bookingService.createBooking(booking).subscribe(
  //     (createdBooking) => {
  //       this.bookings.push(createdBooking);
  //     },
  //     (error) => {
  //       console.error('Error creating booking:', error);
  //     }
  //   );
  // }

  updateBooking(booking: Booking): void {
    this.bookingService.updateBooking(booking.id!, booking).subscribe(
      (updated) => {
        const index = this.bookings.findIndex(b => b.id === updated.id);
        if (index !== -1) {
          this.bookings[index] = updated;
        }
      },
      (error) => {
        console.error('Error updating booking:', error);
      }
    );
  }
}
