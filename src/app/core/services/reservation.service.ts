import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RESERVATION_MOCK } from './reservation-mock';

export interface Reservation {
  id: number;
  hotelId: number;
  customerName: string;
  roomType: string;
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
}
export interface ReservationRequest {
  id: number;
  hotelId: number;
  hotelName: string;
  checkInDate: string;
  checkOutDate: string;
  guests: Guest[];
  emergencyContact: EmergencyContact;
  totalPrice: number;
  status: 'Pendiente' | 'Confirmada' | 'Cancelada';
}

interface Guest {
  fullName: string;
  birthDate: string;
  gender: 'Masculino' | 'Femenino' | 'Otro';
  documentType: 'DNI' | 'Pasaporte' | 'Cédula';
  documentNumber: string;
  email: string;
  phone: string;
}

export interface EmergencyContact {
  fullName: string;
  phone: string;
}
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [
    { id: 1, hotelId: 1, customerName: 'Juan Pérez', roomType: 'Doble', checkInDate: '2024-03-01', checkOutDate: '2024-03-05', totalPrice: 300 },
    { id: 2, hotelId: 2, customerName: 'Ana Gómez', roomType: 'Suite', checkInDate: '2024-03-10', checkOutDate: '2024-03-15', totalPrice: 500 }
  ];

  private reservationsList = [...RESERVATION_MOCK];

  getReservations(): Observable<Reservation[]> {
    return of(this.reservations);
  }

  getReservationsRequest(): Observable<Reservation[]> {
    return of(this.reservations);
  }

  getReservationsByHotel(hotelId: number): Observable<Reservation[]> {
    return of(this.reservations.filter(res => res.hotelId === hotelId));
  }

  getReservationById(id: number): Observable<Reservation | undefined> {
    const reservation = this.reservations.find(res => res.id === id);
    return of(reservation);
  }

  createReservation(newReservation: ReservationRequest): Observable<ReservationRequest> {
    newReservation.id = this.reservationsList.length + 1;
    this.reservationsList.push(newReservation);
    return of(newReservation);
  }

  updateReservation(id: number, updatedReservation: Partial<Reservation>): Observable<Reservation | undefined> {
    const index = this.reservationsList.findIndex(res => res.id === id);
    if (index !== -1) {
      this.reservations[index] = { ...this.reservations[index], ...updatedReservation };
      return of(this.reservations[index]);
    }
    return of(undefined);
  }

  deleteReservation(id: number): Observable<boolean> {
    const index = this.reservationsList.findIndex(res => res.id === id);
    if (index !== -1) {
      this.reservations.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
