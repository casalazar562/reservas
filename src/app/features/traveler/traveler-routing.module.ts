import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

// const routes: Routes = [
//   { path: '', component: RegisterReservationComponent }
// ];

const routes: Routes = [
  { path: 'search-hotels', component: HotelSearchComponent },
  { path: 'hotels', component: HotelListComponent },
  { path: 'reserve/:hotelId', component: ReservationFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelerRoutingModule { }
