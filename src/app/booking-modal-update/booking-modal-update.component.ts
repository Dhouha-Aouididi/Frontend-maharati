import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Booking } from '../models/booking';

@Component({
  selector: 'app-booking-modal-update',
  templateUrl: './booking-modal-update.component.html',
  styleUrls: ['./booking-modal-update.component.css']
})
export class BookingModalUpdateComponent implements OnInit {
  @Input() booking: Booking | undefined;
  @Output() dateTimeSelected = new EventEmitter<{ date: Date, time: string }>();
  selectedDate: Date | null = null;
  selectedTime: string | null = null;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    if (this.booking) {
      this.selectedDate = new Date(this.booking.date);
      this.selectedTime = this.booking.time;
    }
  }

  confirmBooking() {
    if (this.selectedDate && this.selectedTime) {
      this.dateTimeSelected.emit({ date: this.selectedDate, time: this.selectedTime });
      this.activeModal.close('Booking confirmed');
    } else {
      console.log('Please select both date and time.');
    }
  }

  cancelBooking() {
    this.activeModal.dismiss('Booking cancelled');
  }
}
