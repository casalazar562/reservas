import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HotelService } from '../../../core/services/hotel.service';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrl: './hotel-search.component.scss',
  standalone: false
})
export class HotelSearchComponent {
  searchForm: FormGroup;
  hotels: any[] = [];
  loading = false;

  constructor(private fb: FormBuilder, private hotelService: HotelService) {
    this.searchForm = this.fb.group({
      checkInDate: [''],
      checkOutDate: [''],
      guests: [''],
      city: ['']
    });
  }

  searchHotels() {
    if (this.searchForm.valid) {
      this.loading = true;
      const { checkInDate, checkOutDate, guests, city } = this.searchForm.value;

      this.hotelService.searchHotels(city, checkInDate, checkOutDate, guests).subscribe(data => {
        this.hotels = data;
        this.loading = false;
      });
    }
  }
}
