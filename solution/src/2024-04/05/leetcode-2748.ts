/**
 * 2748. Number of Beautiful Pairs
 * https://leetcode.com/problems/number-of-beautiful-pairs
 */
export function countBeautifulPairs(nums: number[]): number {
  function gcd(x: number, y: number) {
    while (y !== 0) {
      [x, y] = [y, x % y];
    }
    return x;
  }

  function getFirstDigit(num: number) {
    while (10 <= num) {
      num = Math.floor(num / 10);
    }
    return num;
  }

  function isBeautifulPair(x: number, y: number) {
    const firstDigit = getFirstDigit(x);
    const lastDigit = y % 10;
    return gcd(firstDigit, lastDigit) === 1;
  }

  const n = nums.length;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isBeautifulPair(nums[i], nums[j])) {
        answer += 1;
      }
    }
  }
  return answer;
}
