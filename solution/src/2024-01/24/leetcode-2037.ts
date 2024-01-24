/**
 * 2037. Minimum Number of Moves to Seat Everyone
 * https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone
 */
export function minMovesToSeat(seats: number[], students: number[]): number {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  return seats.reduce((answer, seat, i) => answer + Math.abs(seat - students[i]), 0);
}
