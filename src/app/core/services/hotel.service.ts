import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HOTELS_MOCK } from './hotel-mock';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private hotels = [...HOTELS_MOCK];

  private hotelsList = [
    { id: 1, name: 'Hotel Plaza', location: 'Buenos Aires', availableRooms: 5, price: 100, rating: 4.5 },
    { id: 2, name: 'Mar del Sur', location: 'Mar del Plata', availableRooms: 2, price: 80, rating: 4.0 },
    { id: 3, name: 'Montaña Lodge', location: 'Buenos Aires', availableRooms: 8, price: 120, rating: 5.0 }
  ];

  getHotels(): Observable<any[]> {
    return of(this.hotels);
  }

  getHotelById(id: number): Observable<any> {
    return of(this.hotels.find(h => h.id === id));
  }

  createHotel(hotelData: any): Observable<any> {
    hotelData.id = this.hotels.length + 1;
    this.hotels.push(hotelData);
    return of(hotelData);
  }

  updateHotel(id: number, hotelData: any): Observable<any> {
    const index = this.hotels.findIndex(h => h.id === id);
    if (index > -1) {
      this.hotels[index] = { ...this.hotels[index], ...hotelData };
    }
    return of(hotelData);
  }

  toggleHotelStatus(id: number, status: boolean): Observable<any> {
    const hotel = this.hotels.find(h => h.id === id);
    if (hotel) {
      hotel.enabled = status;
    }
    return of(hotel);
  }

  searchHotels(destination: string, checkIn: string, checkOut: string, guests: number): Observable<any[]> {
    const filteredHotels = this.hotelsList.filter(hotel =>
      hotel.location.toLowerCase().includes(destination.toLowerCase()) && hotel.availableRooms >= guests
    );

    return of(filteredHotels);
  }

}
