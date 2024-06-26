/**
 * 2917. Find the K-or of an Array
 * https://leetcode.com/problems/find-the-k-or-of-an-array
 */
export function findKOr(nums: number[], k: number): number {
  let answer = 0;
  for (let n = 0; n < 31; n++) {
    let count = 0;
    for (const num of nums) {
      if (num & (1 << n)) {
        count += 1;
      }
    }
    if (k <= count) {
      answer += 1 << n;
    }
  }
  return answer;
}
