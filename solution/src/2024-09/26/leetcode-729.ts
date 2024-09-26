/**
 * 729. My Calendar I
 * https://leetcode.com/problems/my-calendar-i
 */
export class MyCalendar {
  private readonly booked: Array<{ start: number; end: number }>;

  constructor() {
    this.booked = [];
  }

  book(start: number, end: number): boolean {
    for (const b of this.booked) {
      if (Math.max(b.start, start) < Math.min(b.end, end)) {
        return false;
      }
    }
    this.booked.push({ start, end });
    return true;
  }
}
