import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.scss',
  standalone: false
})
export class HotelListComponent {
  hotels = [
    { id: 1, name: 'Hotel Sunrise', location: 'Cancún', roomsAvailable: 5 },
    { id: 2, name: 'Hotel Paradise', location: 'Miami', roomsAvailable: 2 },
  ];

  selectHotel(hotelId: number) {
    console.log('Hotel seleccionado:', hotelId);
  }
}
