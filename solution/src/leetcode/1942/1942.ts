import { Heap } from '@algorithm/lib';

/**
 * 1942. The Number of the Smallest Unoccupied Chair
 * https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair
 */
export function smallestChair(times: number[][], targetFriend: number): number {
  const n = times.length;
  const seats = new Heap<number>((a, b) => a - b);
  for (let seat = 0; seat < n; seat++) {
    seats.push(seat);
  }

  const heap = new Heap<number[]>((a, b) => a[0] - b[0]);
  const friends: number[][] = times.map((value, i) => [...value, i]).sort((a, b) => a[0] - b[0]);
  for (const [arrival, leaving, friend] of friends) {
    while (!heap.isEmpty && heap.peek && heap.peek[0] <= arrival) {
      seats.push(heap.peek[1]);
      heap.pop();
    }
    const seat = seats.pop() ?? -1;
    heap.push([leaving, seat]);
    if (friend === targetFriend) {
      return seat;
    }
  }
  return -1;
}
