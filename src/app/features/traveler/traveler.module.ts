import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelerRoutingModule } from './traveler-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { MatList, MatListItem } from '@angular/material/list';


@NgModule({
  declarations: [
    HotelSearchComponent,
    HotelListComponent,
    ReservationFormComponent
  ],
  imports: [
    CommonModule,
    TravelerRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatList,
    MatListItem
  ]
})
export class TravelerModule { }
