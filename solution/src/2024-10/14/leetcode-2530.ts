import { Heap } from '@algorithm/lib';

/**
 * 2530. Maximal Score After Applying K Operations
 * https://leetcode.com/problems/maximal-score-after-applying-k-operations
 */
export function maxKelements(nums: number[], k: number): number {
  const heap = new Heap<number>((a, b) => b - a);
  nums.forEach((num) => {
    heap.push(num);
  });

  let answer = 0;
  for (let i = 0; i < k; i++) {
    const score = heap.pop() ?? 0;
    heap.push(Math.ceil(score / 3));
    answer += score;
  }
  return answer;
}
