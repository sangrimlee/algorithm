import { Heap, range } from '@algorithm/lib';

/**
 * 2542. Maximum Subsequence Score
 * https://leetcode.com/problems/maximum-subsequence-score
 */
export function maxScore(nums1: number[], nums2: number[], k: number): number {
  const n = nums1.length;
  const pairs = Array.from({ length: n }).map((_, i) => [nums1[i], nums2[i]]);
  pairs.sort((a, b) => b[1] - a[1]);

  const heap = new Heap<number>((a, b) => a - b);
  let sumValue = 0;
  for (const i of range(k)) {
    heap.push(pairs[i][0]);
    sumValue += pairs[i][0];
  }

  let answer = sumValue * pairs[k - 1][1];

  for (const i of range(k, n)) {
    sumValue -= heap.pop() || 0;
    sumValue += pairs[i][0];
    heap.push(pairs[i][0]);

    answer = Math.max(answer, sumValue * pairs[i][1]);
  }

  return answer;
}
