import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { RoleGuard } from '../../core/guards/role.guard';
import { HotelFormComponent } from './hotel-form/hotel-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';


const routes: Routes = [
  {
    path: '',
    component: HotelListComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'agencia' }
  },
  {
    path: 'hotel/new',
    component: HotelFormComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'agencia' }
  },
  {
    path: 'hotel/edit/:id',
    component: HotelFormComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'agencia' }
  },
  {
    path: 'reservations',
    component: ReservationListComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'agencia' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelAgencyRoutingModule {

}
