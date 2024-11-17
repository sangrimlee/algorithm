/**
 * 862. Shortest Subarray with Sum at Least K
 * https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k
 */
export function shortestSubarray(nums: number[], k: number): number {
  const n = nums.length;
  const prefix: number[] = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }

  let answer = n + 1;
  const deque: number[] = [];
  for (let i = 0; i < n + 1; i++) {
    while (0 < deque.length && k <= prefix[i] - prefix[deque[0]]) {
      answer = Math.min(answer, i - deque.shift()!);
    }
    while (0 < deque.length && prefix[i] <= prefix[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);
  }
  return answer <= n ? answer : -1;
}
