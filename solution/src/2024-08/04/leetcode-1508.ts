import { Heap } from '@algorithm/lib';

/**
 * 1508. Range Sum of Sorted Subarray Sums
 * https://leetcode.com/problems/range-sum-of-sorted-subarray-sums
 */
export function rangeSum(nums: number[], n: number, left: number, right: number): number {
  const MOD = 1_000_000_007;
  const heap = new Heap<[number, number]>((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  for (let i = 0; i < n; i++) {
    heap.push([nums[i], i]);
  }

  let answer = 0;
  for (let mid = 1; mid <= right; mid++) {
    const peek = heap.pop();
    if (peek === undefined) break;
    const [num, i] = peek;
    if (left <= mid) {
      answer += num;
    }
    if (i + 1 < n) {
      heap.push([num + nums[i + 1], i + 1]);
    }
  }
  return answer % MOD;
}
