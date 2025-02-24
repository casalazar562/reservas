import { Component, Input } from '@angular/core';
import { Room, RoomService } from '../../../core/services/room.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-management',
  imports: [CommonModule, MatCardModule, MatListModule, MatSlideToggleModule],
  templateUrl: './room-management.component.html',
  styleUrl: './room-management.component.scss'
})
export class RoomManagementComponent {
  @Input() hotelId!: number;
  rooms: Room[] = [];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    if (this.hotelId) {
      this.roomService.getRoomsByHotel(this.hotelId).subscribe(rooms => {
        this.rooms = rooms;
      });
    }
  }

  toggleRoomStatus(room: Room): void {
    room.enabled = !room.enabled;
    this.roomService.updateRoomStatus(room.id, room.enabled).subscribe();
  }
}
