import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';

interface User {
  email: string;
  role: 'agencia' | 'viajero';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private userRoleSubject = new BehaviorSubject<string | null>(this.getStoredRole());
  userRole$ = this.userRoleSubject.asObservable();

  constructor(private router: Router) { }

  private mockUsers = [
    { email: 'agencia@test.com', password: '123456', role: 'agencia' },
    { email: 'viajero@test.com', password: '123456', role: 'viajero' }
  ];

  login(email: string, password: string): Observable<boolean> {
    const user = this.mockUsers.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('token', 'mock-token');
      localStorage.setItem('role', user.role);
      this.isAuthenticatedSubject.next(true);
      this.userRoleSubject.next(user.role);
      return of(true);
    }
    return of(false);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.isAuthenticatedSubject.next(false);
    this.userRoleSubject.next(null);
    this.router.navigate(['']);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  getUserRole(): string | null {
    return this.userRoleSubject.value;
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  private getStoredRole(): string | null {
    return localStorage.getItem('role');
  }
}
