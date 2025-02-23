/**
 * 2554. Maximum Number of Integers to Choose From a Range I
 * https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i
 */
export function maxCount(banned: number[], n: number, maxSum: number): number {
  const set = new Set(banned);

  let answer = 0;
  let [num, sum] = [1, 0];
  while (num <= n && sum + num <= maxSum) {
    if (!set.has(num)) {
      sum += num;
      answer += 1;
    }
    num += 1;
  }
  return answer;
}
