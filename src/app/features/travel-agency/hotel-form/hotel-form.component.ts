import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HotelService } from '../../../core/services/hotel.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { RoomManagementComponent } from '../room-management/room-management.component';



@Component({
  selector: 'app-hotel-form',
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    RoomManagementComponent
  ],
  templateUrl: './hotel-form.component.html',
  styleUrl: './hotel-form.component.scss'
})
export class HotelFormComponent {
  hotelForm!: FormGroup;
  isEditMode = false;
  hotelId!: number;

  constructor(
    private fb: FormBuilder,
    private hotelService: HotelService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.hotelForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      basePrice: [0, Validators.required],
      tax: [0, Validators.required],
      roomType: ['', Validators.required],
      enabled: ['', Validators.required],
    });

    this.hotelId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.hotelId) {
      this.isEditMode = true;
      this.hotelService.getHotelById(this.hotelId).subscribe(hotel => {
        this.hotelForm.patchValue(hotel);
      });
    }
  }

  onSubmit(): void {
    if (this.hotelForm.valid) {
      const hotelData = this.hotelForm.value;
      if (this.isEditMode) {
        this.hotelService.updateHotel(this.hotelId, hotelData).subscribe(() => {
          this.router.navigate(['/dashboard/register-hotel']);
        });
      } else {
        this.hotelService.createHotel(hotelData).subscribe(() => {
          this.router.navigate(['/dashboard/register-hotel']);
        });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/dashboard/register-hotel']);
  }
}
