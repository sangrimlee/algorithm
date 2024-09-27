/**
 * 731. My Calendar II
 * https://leetcode.com/problems/my-calendar-ii
 */
export class MyCalendarTwo {
  private readonly bookings: [number, number][];
  private readonly doubleBookings: [number, number][];

  constructor() {
    this.bookings = [];
    this.doubleBookings = [];
  }

  book(start: number, end: number): boolean {
    for (const booking of this.doubleBookings) {
      if (Math.max(start, booking[0]) < Math.min(end, booking[1])) {
        return false;
      }
    }

    for (const booking of this.bookings) {
      if (Math.max(start, booking[0]) < Math.min(end, booking[1])) {
        this.doubleBookings.push([Math.max(start, booking[0]), Math.min(end, booking[1])]);
      }
    }
    this.bookings.push([start, end]);
    return true;
  }
}
