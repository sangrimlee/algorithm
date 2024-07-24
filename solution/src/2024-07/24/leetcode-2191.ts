/**
 * 2191. Sort the Jumbled Numbers
 * https://leetcode.com/problems/sort-the-jumbled-numbers
 */
export function sortJumbled(mapping: number[], nums: number[]): number[] {
  const mapped = nums.map((num, i) => [i, convert(num, mapping)]);
  mapped.sort((a, b) => a[1] - b[1]);
  return mapped.map(([i]) => nums[i]);
}

function convert(num: number, mapping: number[]): number {
  if (num < 10) {
    return mapping[num];
  }
  let result = 0;
  let raise = 1;
  while (0 < num) {
    result += mapping[num % 10] * raise;
    num = Math.floor(num / 10);
    raise *= 10;
  }
  return result;
}
