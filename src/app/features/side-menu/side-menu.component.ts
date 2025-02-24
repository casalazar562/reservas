import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-side-menu',
  imports: [MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, RouterModule, MatTooltipModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent implements OnInit {
  menuItems: any[] = [];
  isAuthenticated = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.updateMenu();
  }

  updateMenu(): void {
    const role = this.authService.getUserRole();

    if (role === 'agencia') {
      this.menuItems = [
        { path: 'register-hotel', label: 'Gestión de Hoteles', roles: ['agencia'] },
        { path: 'register-hotel/reservations', label: 'Reservas de Hoteles', roles: ['agencia'] }
      ];
    } else if (role === 'viajero') {
      this.menuItems = [
        { label: 'Buscar Hoteles', path: 'traveler/search-hotels' },
      ];
    } else {
      this.menuItems = [];
    }
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
    this.updateMenu();
  }

  toggleSidenav(): void {
    this.sidenav.toggle();
  }
}
