import { Heap, range } from '@algorithm/lib';

/**
 * 1845. Seat Reservation Manager
 * https://leetcode.com/problems/seat-reservation-manager
 */
export class SeatManager {
  private readonly seats: Heap<number>;
  constructor(n: number) {
    this.seats = new Heap((a, b) => a - b);
    for (const seatNumber of range(1, n + 1)) {
      this.seats.push(seatNumber);
    }
  }

  reserve(): number {
    const seatNumber = this.seats.pop();
    if (seatNumber === undefined) {
      throw new Error('There are no unreserved seats.');
    }
    return seatNumber;
  }

  unreserve(seatNumber: number): void {
    this.seats.push(seatNumber);
  }
}
