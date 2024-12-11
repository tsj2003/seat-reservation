import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule if your component uses forms
import { SeatReservationComponent } from './seat-reservation.component';

describe('SeatReservationComponent', () => {
  let component: SeatReservationComponent;
  let fixture: ComponentFixture<SeatReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatReservationComponent, FormsModule] // Import the standalone component and FormsModule
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});