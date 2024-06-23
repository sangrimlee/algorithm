/**
 * 1248. Count Number of Nice Subarrays
 * https://leetcode.com/problems/count-number-of-nice-subarrays
 */
export function numberOfSubarrays(nums: number[], k: number): number {
  const n = nums.length;
  const count = new Array(n + 1).fill(0);
  count[0] = 1;

  let answer = 0;
  let oddCount = 0;
  for (const num of nums) {
    oddCount += num % 2;
    if (k <= oddCount) {
      answer += count[oddCount - k];
    }
    count[oddCount] += 1;
  }
  return answer;
}
