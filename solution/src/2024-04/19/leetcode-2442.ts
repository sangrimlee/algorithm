/**
 * 2442. Count Number of Distinct Integers After Reverse Operations
 * https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations
 */
export function countDistinctIntegers(nums: number[]): number {
  function reverseDigits(num: number) {
    let reversed = 0;
    while (0 < num) {
      reversed = reversed * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
    return reversed;
  }

  const set = new Set(nums);
  for (const num of nums) {
    set.add(reverseDigits(num));
  }
  return set.size;
}
