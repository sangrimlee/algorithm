/**
 * 1679. Max Number of K-Sum Pairs
 * https://leetcode.com/problems/max-number-of-k-sum-pairs
 */
export function maxOperations(nums: number[], k: number): number {
  const counter = new Map<number, number>();
  for (const num of nums) {
    counter.set(num, (counter.get(num) || 0) + 1);
  }

  let answer = 0;
  for (const num of counter.keys()) {
    const count = counter.get(num) || 0;
    const targetCount = counter.get(k - num) || 0;
    answer += num === k - num ? Math.floor(count / 2) : Math.min(count, targetCount);
    counter.set(num, 0);
    counter.set(k - num, 0);
  }
  return answer;
}
