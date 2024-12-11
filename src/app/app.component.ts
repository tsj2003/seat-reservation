import { Component } from '@angular/core';
import { SeatReservationComponent } from './seat-reservation/seat-reservation.component'; // Import the standalone component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SeatReservationComponent] // Add the standalone component here
})
export class AppComponent {
  title = 'seat-reservation';
}