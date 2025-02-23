/**
 * 1805. Number of Different Integers in a String
 * https://leetcode.com/problems/number-of-different-integers-in-a-string
 */
export function numDifferentIntegers(word: string): number {
  function removeLeadingZero(num: string) {
    const removed = num.replace(/^0+/, '');
    return removed.length === 0 ? '0' : removed;
  }
  const nums = [...word.matchAll(/[0-9]+/g)].map(([num]) => removeLeadingZero(num));
  return new Set(nums).size;
}
