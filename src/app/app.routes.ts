import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RoleGuard } from './core/guards/role.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { SideMenuComponent } from './features/side-menu/side-menu.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'dashboard', component: SideMenuComponent, canActivate: [AuthGuard],

        children: [
            {
                path: 'register-hotel',
                loadChildren: () => import('./features/travel-agency/travel-agency.module').then(m => m.TravelAgencyModule),
                canActivate: [AuthGuard, RoleGuard],
                data: { role: 'agencia' }
            },
            {
                path: 'traveler',
                loadChildren: () => import('./features/traveler/traveler.module').then(m => m.TravelerModule),
                canActivate: [AuthGuard, RoleGuard],
                data: { role: 'viajero' }
            }
        ]
    },


];
