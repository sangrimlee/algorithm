/**
 * 3314. Construct the Minimum Bitwise Array I
 * https://leetcode.com/problems/construct-the-minimum-bitwise-array-i
 */
export function minBitwiseArray(nums: number[]): number[] {
  const answer = [];
  for (const num of nums) {
    if (num % 2 === 0) {
      answer.push(-1);
    } else {
      answer.push(num - Math.floor(((num + 1) & (-num - 1)) / 2));
    }
  }
  return answer;
}
