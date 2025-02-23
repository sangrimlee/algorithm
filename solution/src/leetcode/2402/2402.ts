import { Heap } from '@algorithm/lib';

/**
 * 2402. Meeting Rooms III
 * https://leetcode.com/problems/meeting-rooms-iii
 */
export function mostBooked(n: number, meetings: number[][]): number {
  function sortFn<T extends number | number[]>(a: T, b: T): number {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    }
    if (Array.isArray(a) && Array.isArray(b)) {
      for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] !== b[i]) {
          return a[i] - b[i];
        }
      }
      return a.length - b.length;
    }
    return 0;
  }

  meetings.sort(sortFn);

  const availables = new Heap<number>(sortFn);
  const reservations = new Heap<[number, number]>(sortFn);

  for (let i = 0; i < n; i++) {
    availables.push(i);
  }

  const bookedCount = new Array<number>(n).fill(0);
  for (const [start, end] of meetings) {
    while (0 < reservations.length && reservations.peek && reservations.peek[0] <= start) {
      const peek = reservations.pop();
      if (peek) {
        availables.push(peek[1]);
      }
    }

    if (0 < availables.length) {
      const room = availables.pop();
      if (room !== undefined) {
        reservations.push([end, room]);
        bookedCount[room] += 1;
      }
    } else {
      const reservation = reservations.pop();
      if (reservation) {
        const [time, room] = reservation;
        reservations.push([time + end - start, room]);
        bookedCount[room] += 1;
      }
    }
  }

  return bookedCount.indexOf(Math.max(...bookedCount));
}
