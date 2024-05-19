/**
 * 3068. Find the Maximum Sum of Node Values
 * https://leetcode.com/problems/find-the-maximum-sum-of-node-values
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- edges are useless
export function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
  let sum = 0;
  let count = 0;
  let sacrifice = Number.MAX_SAFE_INTEGER;
  for (const num of nums) {
    const xor = num ^ k;
    sum += Math.max(num, xor);
    count += num < xor ? 1 : 0;
    sacrifice = Math.min(sacrifice, Math.abs(num - xor));
  }
  return count % 2 === 0 ? sum : sum - sacrifice;
}
