import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SeatReservationComponent } from './seat-reservation/seat-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    SeatReservationComponent // Ensure this is included
  ],
  imports: [
    BrowserModule,
    FormsModule // Ensure this is included
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }