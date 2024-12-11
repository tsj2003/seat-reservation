import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class SeatReservationComponent {
  totalSeats = 80;
  seatsPerRow = 7;
  rows: boolean[][] = Array.from({ length: 11 }, (_, i) => (i < 10 ? Array(this.seatsPerRow).fill(false) : Array(3).fill(false)));
  bookedSeats = [0, 1, 7, 8, 15]; // Example of already booked seats
  requestedSeats: number = 0; // Ensure this line is present
  message: string = ''; // Define the message property

  constructor() {
    this.initializeSeats();
  }

  initializeSeats() {
    this.bookedSeats.forEach(seat => {
      const row = Math.floor(seat / this.seatsPerRow);
      const seatInRow = seat % this.seatsPerRow;
      if (row < 10) {
        this.rows[row][seatInRow] = true;
      } else {
        this.rows[10][seat - 70] = true; // Last row has only 3 seats
      }
    });
  }

  bookSeats(requestedSeats: number) {
    if (requestedSeats < 1 || requestedSeats > 7) {
      this.message = "You can only book between 1 and 7 seats.";
      return;
    }

    for (let i = 0; i < this.rows.length; i++) {
      const availableSeats = this.rows[i].reduce<number[]>((acc, seat, index) => seat ? acc : acc.concat(index), []);
// ... existing code ...
      if (availableSeats.length >= requestedSeats) {
        const booked = availableSeats.slice(0, requestedSeats);
        booked.forEach(seatIndex => {
          this.rows[i][seatIndex] = true; // Mark seat as booked
        });
        this.message = `Booked seats: ${booked.map(seatIndex => (i < 10 ? i * this.seatsPerRow + seatIndex : 70 + seatIndex)).join(', ')}`;
        return;
      }
    }

    this.message = "Not enough adjacent seats available.";
  }
}