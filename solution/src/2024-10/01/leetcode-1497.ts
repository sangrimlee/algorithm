/**
 * 1497. Check If Array Pairs Are Divisible by k
 * https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k
 */
export function canArrange(arr: number[], k: number): boolean {
  const counter = new Array(k).fill(0);
  for (const num of arr) {
    const remainder = ((num % k) + k) % k;
    counter[remainder] += 1;
  }

  if (counter[0] % 2 !== 0) {
    return false;
  }

  for (let i = 1; i <= k / 2; i++) {
    if (counter[i] !== counter[k - i]) {
      return false;
    }
  }
  return true;
}
