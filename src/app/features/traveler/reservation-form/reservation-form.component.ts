import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationService } from '../../../core/services/reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss',
  standalone: false
})
export class ReservationFormComponent {
  reservationForm: FormGroup;

  constructor(private fb: FormBuilder, private reservationService: ReservationService) {
    this.reservationForm = this.fb.group({
      fullName: [''],
      birthDate: [''],
      gender: [''],
      documentType: [''],
      documentNumber: [''],
      email: [''],
      phone: [''],
      emergencyContact: this.fb.group({
        fullName: [''],
        phone: ['']
      })
    });
  }

  submitReservation() {
    console.log('Reserva enviada:', this.reservationForm.value);
    this.reservationService.createReservation(this.reservationForm.value).subscribe();
  }
}
