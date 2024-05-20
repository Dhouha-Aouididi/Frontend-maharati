import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingModalUpdateComponent } from './booking-modal-update.component';

describe('BookingModalUpdateComponent', () => {
  let component: BookingModalUpdateComponent;
  let fixture: ComponentFixture<BookingModalUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingModalUpdateComponent]
    });
    fixture = TestBed.createComponent(BookingModalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
