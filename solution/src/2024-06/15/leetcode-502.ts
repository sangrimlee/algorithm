import { Heap } from '@algorithm/lib';

/**
 * 502. IPO
 * https://leetcode.com/problems/ipo
 */
export function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[],
): number {
  const projects = profits.map((profit, i) => [capital[i], profit]).sort((a, b) => a[0] - b[0]);

  const n = profits.length;
  const heap = new Heap<number>((a, b) => b - a);

  let project = 0;
  let totalCapital = w;
  for (let i = 0; i < k; i++) {
    while (project < n && projects[project][0] <= totalCapital) {
      heap.push(projects[project][1]);
      project += 1;
    }
    if (heap.isEmpty) {
      return totalCapital;
    }
    totalCapital += heap.pop()!;
  }
  return totalCapital;
}
