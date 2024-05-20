export interface Booking {
Service: any;
    id?: number;
    user_id: number;
    service_id: number;
    date: Date;
    time : string
    // status: 'pending' | 'confirmed' | 'cancelled';
  }
  