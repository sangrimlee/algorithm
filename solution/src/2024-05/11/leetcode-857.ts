import { Heap } from '@algorithm/lib';

/**
 * 857. Minimum Cost to Hire K Workers
 * https://leetcode.com/problems/minimum-cost-to-hire-k-workers
 */
export function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
  const workers = quality.map((q, i) => [wage[i] / q, q]).sort((a, b) => a[0] - b[0]);

  let answer = Number.MAX_SAFE_INTEGER;
  let qualitySum = 0;
  const heap = new Heap<number>((a, b) => a - b);
  for (const [r, q] of workers) {
    heap.push(-q);
    qualitySum += q;
    if (k < heap.length) {
      qualitySum += heap.pop()!;
    }
    if (k === heap.length) {
      answer = Math.min(answer, qualitySum * r);
    }
  }
  return answer;
}
