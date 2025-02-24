import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Room {
  id: number;
  hotelId: number;
  type: string;
  price: number;
  enabled: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class RoomService {

  private rooms: Room[] = [
    { id: 1, hotelId: 1, type: 'Doble', price: 100, enabled: true },
    { id: 2, hotelId: 1, type: 'Suite', price: 200, enabled: false },
    { id: 3, hotelId: 2, type: 'Premium', price: 250, enabled: true }
  ];

  getRoomsByHotel(hotelId: number): Observable<Room[]> {
    return of(this.rooms.filter(room => room.hotelId === hotelId));
  }

  updateRoomStatus(roomId: number, enabled: boolean): Observable<void> {
    const room = this.rooms.find(r => r.id === roomId);
    if (room) {
      room.enabled = enabled;
    }
    return of();
  }
}
