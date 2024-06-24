/**
 * 995. Minimum Number of K Consecutive Bit Flips
 * https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips
 */
export function minKBitFlips(nums: number[], k: number): number {
  const n = nums.length;
  const isFlipped = new Array(n).fill(0);

  let answer = 0;
  let flipped = 0;
  for (let i = 0; i < n; i++) {
    if (k <= i) {
      flipped ^= isFlipped[i - k];
    }
    if (flipped === nums[i]) {
      if (n < i + k) {
        return -1;
      }
      isFlipped[i] = 1;
      flipped ^= 1;
      answer += 1;
    }
  }
  return answer;
}
