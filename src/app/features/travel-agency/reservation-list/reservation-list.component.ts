import { Component } from '@angular/core';
import { Reservation, ReservationService } from '../../../core/services/reservation.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-list',
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.scss'
})
export class ReservationListComponent {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(res => {
      this.reservations = res;
    });
  }
}
