import { Component } from '@angular/core';
import { HotelService } from '../../../core/services/hotel.service';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  imports: [MatCardModule, MatTableModule, MatSlideToggleModule, MatIconModule, RouterModule],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.scss'
})
export class HotelListComponent {
  hotels: any[] = [];

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {
    this.hotelService.getHotels().subscribe(data => {
      this.hotels = data;
    });
  }

  toggleStatus(hotel: any): void {
    this.hotelService.toggleHotelStatus(hotel.id, !hotel.enabled).subscribe(() => {
      hotel.enabled = !hotel.enabled;
    });
  }
}
